# AGENTS.md

Guide for agentic coding agents working in this repository.

## Project Overview

Next.js 16 App Router project using React 19, TypeScript 5.9, Tailwind CSS v4, and shadcn/ui with the "radix-luma" style. Package manager: **pnpm**.

## Build & Development Commands

```bash
pnpm dev          # Start dev server (Turbopack)
pnpm build        # Production build
pnpm lint         # Run ESLint
pnpm format       # Format all .ts/.tsx files with Prettier
pnpm typecheck    # TypeScript type checking (tsc --noEmit)
```

**Adding shadcn components:**

```bash
npx shadcn@latest add <component>   # Add a component
npx shadcn@latest docs <component>  # Get component docs & examples
npx shadcn@latest search -q "term"  # Search registries
```

**Testing:** No test framework is configured. No tests exist yet.

## Running a Single Test

No test runner is installed. If tests are added in the future, configure vitest or similar and update this section.

## Project Structure

```
app/                    # Next.js App Router pages and layouts
  globals.css           # Global styles, CSS variables, Tailwind v4 theme
  layout.tsx            # Root layout with ThemeProvider
  page.tsx              # Home page
components/
  ui/                   # 55 shadcn/ui components (button, dialog, etc.)
  theme-provider.tsx    # Dark/light mode provider
hooks/                  # Custom React hooks (use-mobile.ts)
lib/
  utils.ts              # cn() utility (clsx + tailwind-merge)
```

Path alias: `@/*` maps to the project root.

## Code Style

### Formatting (enforced by Prettier)

- **No semicolons**
- **Double quotes** for strings
- **4-space indentation** (tabs)
- Trailing commas (ES5)
- Print width: 80
- Tailwind class sorting via `prettier-plugin-tailwindcss`

### Imports

```tsx
import * as React from "react"
import { Slot } from "radix-ui"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon } from "@hugeicons/core-free-icons"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
```

- React imported as namespace: `import * as React from "react"`
- Use `type` keyword for type-only imports: `import { type VariantProps } ...`
- Direct imports from specific files, no barrel imports
- Use `@/` path alias for project imports
- Icon library is **Hugeicons** (`@hugeicons/react` + `@hugeicons/core-free-icons`), NOT lucide-react

### Naming Conventions

| Item                | Convention                    | Example                                  |
| ------------------- | ----------------------------- | ---------------------------------------- |
| Component files     | kebab-case                    | `alert-dialog.tsx`, `theme-provider.tsx` |
| Components          | PascalCase                    | `Button`, `DialogContent`                |
| Hooks               | camelCase with `use` prefix   | `useIsMobile`                            |
| Hook files          | kebab-case with `use-` prefix | `use-mobile.ts`                          |
| Variables/functions | camelCase                     | `buttonVariants`, `cn`                   |
| Constants           | UPPER_SNAKE_CASE              | `MOBILE_BREAKPOINT`                      |
| Data attributes     | kebab-case                    | `data-slot`, `data-variant`, `data-size` |

### Exports

- **Named exports** for all components and utilities (no default exports in `components/`)
- **Default exports** only for `app/` page and layout files (required by Next.js)
- Group all exports in a single `export { ... }` block at the end of the file

### Component Patterns

- Every component gets a `data-slot` attribute for identification
- Variant components use `data-variant`, `data-size` attributes
- Always accept and merge `className` via `cn()`
- Props spread last: `{...props}` after explicit props
- Use `cva` (class-variance-authority) for component variants
- Props typed via `React.ComponentProps<typeof ...>` or `React.ComponentProps<"element">`
- No explicit return type annotations on components
- Client components must have `"use client"` at the top

### Example Component

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

function MyComponent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="my-component"
            className={cn("flex items-center gap-2", className)}
            {...props}
        />
    )
}

export { MyComponent }
```

### TypeScript

- Strict mode enabled
- No `any` types
- Use intersection types for extending props: `React.ComponentProps<"button"> & VariantProps<...>`

### Error Handling

- Field validation: `data-invalid` on `Field` wrapper, `aria-invalid` on the control
- Use `FieldError` component for error messages
- No custom try/catch patterns unless dealing with async operations

## Styling Rules (Critical)

- **Semantic colors only:** `bg-primary`, `text-muted-foreground` — never raw colors like `bg-blue-500`
- **Built-in variants first:** Use `variant="outline"` instead of custom className overrides
- **className for layout only:** Don't override component colors or typography via className
- **No `space-x-*` / `space-y-*`:** Use `flex` with `gap-*` instead
- **Use `size-*`** when width and height are equal: `size-10` not `w-10 h-10`
- **Use `truncate`** shorthand instead of `overflow-hidden text-ellipsis whitespace-nowrap`
- **No manual `dark:` color overrides:** Semantic tokens handle light/dark via CSS variables
- **Use `cn()`** for conditional classes, not template literal ternaries
- **No manual z-index** on overlay components (Dialog, Sheet, etc. handle their own)

## Forms

- Forms use `FieldGroup` + `Field`, not raw `div` with `space-y-*`
- `InputGroup` uses `InputGroupInput`/`InputGroupTextarea`, not raw `Input`/`Textarea`
- Option sets (2-7 choices) use `ToggleGroup`, not manual `Button` loops
- Use `FieldSet` + `FieldLegend` for grouping related checkboxes/radios

## Composition

- Items always inside their Group: `SelectItem` in `SelectGroup`, `DropdownMenuItem` in `DropdownMenuGroup`
- Dialog, Sheet, and Drawer always need a Title (use `className="sr-only"` if visually hidden)
- Use full Card composition: `CardHeader`/`CardTitle`/`CardDescription`/`CardContent`/`CardFooter`
- Button has no `isPending`/`isLoading` — compose with `Spinner` + `data-icon` + `disabled`
- `TabsTrigger` must be inside `TabsList`
- `Avatar` always needs `AvatarFallback`

## Icons

- Icons in buttons use `data-icon`: `<Icon data-icon="inline-start" />`
- No sizing classes on icons inside components — components handle icon sizing via CSS
- Pass icons as objects, not string keys: `icon={CheckIcon}`

## ESLint

Flat config (ESLint 9) extending `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`. Ignores `.next/`, `out/`, `build/`.

## Before Committing

After making changes, always run:

```bash
pnpm typecheck
pnpm lint
pnpm format
```

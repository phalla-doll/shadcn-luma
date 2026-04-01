# shadcn-luma

**Rounded geometry. Soft elevation. Breathable layouts.**

Introducing Luma, a new shadcn/ui style inspired by macOS Tahoe (minus the glass).

## Design Characteristics

- **Rounded geometry** — Pill-shaped buttons (`rounded-4xl`), a `0.625rem` base radius scaled across seven steps (`sm` through `4xl`) for consistent, approachable shapes.
- **Soft elevation** — Subtle opacity-based borders in dark mode (`oklch(1 0 0 / 10%)`) create depth without harsh lines.
- **Breathable layouts** — Generous spacing, muted tones, and a neutral achromatic palette that lets content breathe.
- **Neutral base palette** — Clean grays in light mode, cool-toned surfaces in dark mode, all defined in the perceptually uniform `oklch` color space.
- **Purple-accented primary** — A refined violet-blue primary (`oklch(0.488 0.243 264.376)`) that feels modern and distinctive.
- **Dark mode** — System-aware theming via `next-themes` with instant toggle. Press `d` to switch themes.

## Tech Stack

| Layer       | Technology                                                          |
| ----------- | ------------------------------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org/) with Turbopack                    |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com/)                         |
| Primitives  | [Radix UI](https://radix-ui.com/) + [Base UI](https://base-ui.com/) |
| Icons       | [Hugeicons](https://hugeicons.com/)                                 |
| Language    | [TypeScript](https://www.typescriptlang.org/)                       |
| Font        | [Geist](https://vercel.com/font)                                    |
| Color space | oklch                                                               |

## Components

55 components are available in `components/ui/`:

`accordion` `alert` `alert-dialog` `aspect-ratio` `avatar` `badge` `breadcrumb` `button` `button-group` `calendar` `card` `carousel` `chart` `checkbox` `collapsible` `combobox` `command` `context-menu` `dialog` `direction` `drawer` `dropdown-menu` `empty` `field` `hover-card` `input` `input-group` `input-otp` `item` `kbd` `label` `menubar` `native-select` `navigation-menu` `pagination` `popover` `progress` `radio-group` `resizable` `scroll-area` `select` `separator` `sheet` `sidebar` `skeleton` `slider` `sonner` `spinner` `switch` `table` `tabs` `textarea` `toggle` `toggle-group` `tooltip`

## Getting Started

```bash
git clone https://github.com/phalla-doll/shadcn-luma.git
cd shadcn-luma
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Press `d` to toggle dark mode.

## Adding Components

Add more components from the shadcn registry:

```bash
npx shadcn add [component]
```

This places UI components in the `components/ui` directory.

## Using Components

```tsx
import { Button } from "@/components/ui/button"
```

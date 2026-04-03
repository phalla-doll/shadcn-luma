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

| Layer       | Technology                                                                    |
| ----------- | ----------------------------------------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org/) with Turbopack                              |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com/)                                   |
| Primitives  | [Radix UI](https://radix-ui.com/) + [Base UI](https://base-ui.com/)           |
| Icons       | [Hugeicons](https://hugeicons.com/)                                           |
| Language    | [TypeScript](https://www.typescriptlang.org/)                                 |
| Font        | [Geist](https://vercel.com/font)                                              |
| Color space | oklch                                                                         |
| Maps        | [MapLibre GL](https://maplibre.org/) + [Protomaps](https://protomaps.com/)    |
| Analytics   | [Google Analytics 4](https://analytics.google.com/) via `@next/third-parties` |

## Components

55+ production-grade components are available in `components/ui/`:

`accordion` `alert` `alert-dialog` `aspect-ratio` `avatar` `badge` `breadcrumb` `button` `button-group` `calendar` `card` `carousel` `chart` `checkbox` `collapsible` `combobox` `command` `context-menu` `dialog` `direction` `drawer` `dropdown-menu` `empty` `field` `hover-card` `input` `input-group` `input-otp` `item` `kbd` `label` `menubar` `native-select` `navigation-menu` `pagination` `popover` `progress` `radio-group` `resizable` `scroll-area` `select` `separator` `sheet` `sidebar` `skeleton` `slider` `sonner` `spinner` `switch` `table` `tabs` `textarea` `toggle` `toggle-group` `tooltip`

## What's Inside

### Component Showcase

35+ interactive card examples in `app/component-showcase/` demonstrating real-world shadcn/ui composition patterns — forms, data displays, settings panels, empty states, and more. Every specimen is interactive.

### Interactive Map

A full map experience powered by MapLibre GL and Protomaps (`/map`), with searchable listings, popups, and detail sheets — showcasing how shadcn/ui components compose with complex features.

## Agent Skills

This project includes built-in agent skills that provide AI coding assistants with context-aware rules:

- **[shadcn](./.agents/skills/shadcn/SKILL.md)** — Guidelines for working with shadcn/ui components: styling rules, form patterns, composition, icons, Base vs Radix primitives, and CLI reference.
- **[frontend-design](./.agents/skills/frontend-design/SKILL.md)** — Design principles and workflows for creating production-grade frontend interfaces.

Both skills are pinned in `skills-lock.json` for reproducibility.

## Analytics

Google Analytics 4 is integrated via `@next/third-parties/google`. Pageviews are tracked automatically on every route change (including client-side navigation).

**Custom events** are tracked using the `trackEvent` helper from `lib/analytics.ts`:

```tsx
import { trackEvent } from "@/lib/analytics"

trackEvent("button_click", { label: "signup" })
```

Tracked events include: `theme_toggle`, `scroll_to_section`, `outbound_click`, `search_open`, `location_select`, `listings_open`, `listing_select`, `map_marker_click`, `schedule_viewing`, `contact_call`, `view_detail`.

**Setup:** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`.

## Getting Started

```bash
git clone https://github.com/phalla-doll/shadcn-luma.git
cd shadcn-luma
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Press `d` to toggle dark mode.

The map demo is also available at [`/map`](http://localhost:3000/map).

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

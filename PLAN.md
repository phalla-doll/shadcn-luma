# Phnom Penh Real Estate Map App — Plan

Full-screen MapLibre map with ShadCN components, bottom drawer for listings, and right panel for details. Airbnb-style but map-first instead of grid display.

## Dependencies

```
pnpm add maplibre-gl pmtiles @protomaps/basemaps
```

| Package               | Purpose                                                       |
| --------------------- | ------------------------------------------------------------- |
| `maplibre-gl`         | Map rendering engine                                          |
| `pmtiles`             | PMTiles protocol for loading Protomaps vector tiles           |
| `@protomaps/basemaps` | Generates light/dark MapLibre style JSON with `namedFlavor()` |

## Vector Basemap: Protomaps

- Free, no API key needed
- Light/dark theme switching via `namedFlavor("light")` / `namedFlavor("dark")` tied to ShadCN's ThemeProvider
- Tiles: `pmtiles://https://demo-bucket.protomaps.com/v4.pmtiles`
- Glyphs: `https://protomaps.github.io/basemaps-assets/fonts/{fontstack}/{range}.pbf`

## Map Center

**Phnom Penh**: `[104.9282, 11.5564]` (lng, lat), zoom 12-13

## File Structure

```
app/
  page.tsx                          # Main layout: full-screen map + overlay UI
  globals.css                       # + maplibre CSS import + custom marker styles
components/
  map/
    map-container.tsx               # "use client" — MapLibre init, Protomaps style, GeoJSON source
    map-marker.tsx                  # Custom HTML marker with price pill (styled via ShadCN tokens)
    map-popup.tsx                   # Quick preview popup on marker hover
  listings/
    listings-drawer.tsx             # Bottom Drawer (vaul) with horizontally scrollable cards
    listing-card.tsx                # Card: thumbnail, price, beds/baths/sqft, badges
    listing-detail.tsx              # Right Sheet with full details + image carousel
  search/
    search-bar.tsx                  # Floating search input, predefined Phnom Penh locations
  data/
    listings.ts                     # ~20 mock listings across Phnom Penh districts
    locations.ts                    # Predefined search locations (BKK1, Riverside, Toul Kork, etc.)
```

## Mock Data: 20 Listings Across Phnom Penh

| #   | Type                | District              | Price (USD) | Beds    | Notes                    |
| --- | ------------------- | --------------------- | ----------- | ------- | ------------------------ |
| 1   | Modern Condo        | Boeung Keng Kang 1    | $89,000     | 1       | Near Aeon Mall 1         |
| 2   | Luxury Penthouse    | Chamkarmon            | $320,000    | 3       | River view, pool         |
| 3   | Colonial Villa      | Daun Penh (Riverside) | $750,000    | 5       | Renovated heritage       |
| 4   | Shophouse           | Khan 7 Makara         | $185,000    | —       | Main road, commercial    |
| 5   | Serviced Apartment  | Tonle Bassac          | $125,000    | 2       | Olympia City area        |
| 6   | Studio Condo        | Tuol Kork             | $52,000     | Studio  | New development          |
| 7   | Villa with Pool     | Tuol Kork             | $450,000    | 4       | Gated community          |
| 8   | Borey Villa         | Sen Sok               | $168,000    | 4       | Borey development        |
| 9   | Apartment Building  | Meanchey              | $290,000    | 8 units | Rental income            |
| 10  | Land Plot           | Sen Sok               | $95,000     | —       | 400sqm, main road        |
| 11  | Condo               | Diamond Island        | $135,000    | 2       | New build, gym/pool      |
| 12  | Shophouse           | Russian Market        | $210,000    | —       | Corner unit              |
| 13  | Modern Villa        | Chroy Changvar        | $380,000    | 5       | Mekong river view        |
| 14  | Condo               | Aeon 2 (Sen Sok)      | $72,000     | 1       | Walking distance to mall |
| 15  | Renovated Apartment | BKK1                  | $155,000    | 2       | Expat area               |
| 16  | Land                | Pur Senchey           | $45,000     | —       | 600sqm, developing area  |
| 17  | Townhouse           | Toul Tum Poung        | $125,000    | 3       | Near VIP area            |
| 18  | Luxury Condo        | Koh Pich              | $198,000    | 2       | High floor, panoramic    |
| 19  | Commercial Space    | Monivong Blvd         | $420,000    | —       | High traffic area        |
| 20  | Borey Townhome      | Dangkao               | $78,000     | 3       | Affordable, new area     |

## Predefined Search Locations

| Location              | Coordinates (lng, lat) | Zoom |
| --------------------- | ---------------------- | ---- |
| All Phnom Penh        | [104.9282, 11.5564]    | 12   |
| BKK1 (Expats)         | [104.9200, 11.5530]    | 15   |
| Riverside / Daun Penh | [104.9225, 11.5600]    | 15   |
| Russian Market        | [104.9170, 11.5475]    | 15   |
| Diamond Island        | [104.9355, 11.5500]    | 15   |
| Tuol Kork             | [104.9100, 11.5720]    | 15   |
| Sen Sok / Aeon 2      | [104.8800, 11.5800]    | 14   |
| Chroy Changvar        | [104.9350, 11.5750]    | 15   |

## Component Details

### `map-container.tsx` — Client component

- `useRef` for map div, `useEffect` for init
- Registers PMTiles protocol, creates Protomaps style with light/dark flavor
- Adds GeoJSON source with all listings as Point features
- Creates custom HTML markers (price pills) for each listing
- Handles click → highlight card in drawer + fly to
- Handles `fitBounds` when search location changes

### `map-marker.tsx` — Custom HTML marker

- Pill-shaped div with price text: `$89K`, `$320K`, etc.
- Styled with ShadCN tokens: `bg-popover text-popover-foreground shadow-md rounded-full`
- Selected state: `ring-2 ring-primary`
- Hover: slight scale up

### `listings-drawer.tsx` — Bottom drawer

- Uses ShadCN `Drawer` (vaul)
- Default peek: ~120px showing top of cards
- Expanded: full height scrollable list
- Horizontally scrollable cards in peek mode
- Vertically scrollable list in expanded mode
- "20 properties in this area" header

### `listing-card.tsx` — Card component

- ShadCN `Card` with: thumbnail placeholder (gradient), price badge, beds/baths/sqft, location label
- Compact horizontal layout for drawer, vertical for detail
- Click → opens `listing-detail` Sheet + flies map to marker

### `listing-detail.tsx` — Right Sheet

- ShadCN `Sheet` (side="right")
- Image carousel (ShadCN `Carousel`)
- Price, property type badge, beds/baths/sqft
- Description text
- Agent card (Avatar + name + phone)
- "Schedule Viewing" Button

### `search-bar.tsx` — Floating search

- ShadCN `InputGroup` positioned absolute top-center
- Hugeicons map pin icon
- Dropdown with predefined locations (ShadCN `Command` / combobox)
- Selecting location → `flyTo` map + adjust drawer

## Interactions Flow

1. Page loads → map initializes centered on Phnom Penh → markers appear → drawer peeks from bottom
2. Click marker → drawer expands, card scrolls into view, marker highlights
3. Click card in drawer → map flies to that listing's marker, detail Sheet opens from right
4. Search location → map flies to area, markers update viewport, drawer resets
5. Toggle dark mode → map switches between `namedFlavor("light")` and `namedFlavor("dark")`

## ShadCN Components Used (all already installed)

- `Drawer` — bottom sheet for listings
- `Sheet` — right panel for listing detail
- `Card` — listing cards
- `Badge` — price markers, property type tags
- `Carousel` — listing photos in detail view
- `ScrollArea` — scrollable card list
- `Separator` — section dividers
- `Avatar` — agent photos
- `Button` — actions
- `Skeleton` — loading states
- `Tooltip` — marker hover previews

## Execution Order

1. Install dependencies (`maplibre-gl`, `pmtiles`, `@protomaps/basemaps`)
2. Create `components/data/listings.ts` + `locations.ts`
3. Create `components/map/map-container.tsx`
4. Create `components/map/map-marker.tsx`
5. Create `components/search/search-bar.tsx`
6. Create `components/listings/listing-card.tsx`
7. Create `components/listings/listings-drawer.tsx`
8. Create `components/listings/listing-detail.tsx`
9. Wire everything in `app/page.tsx`
10. Add MapLibre CSS + custom marker styles to `globals.css`
11. Run `pnpm typecheck && pnpm lint && pnpm format`

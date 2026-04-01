"use client"

import * as React from "react"
import maplibregl from "maplibre-gl"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { listings, type Listing } from "@/components/data/listings"
import { Popover, PopoverAnchor, PopoverContent } from "@/components/ui/popover"
import { ListingPopup } from "./listing-popup"

const CARTO_LIGHT_STYLE =
    "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
const CARTO_DARK_STYLE =
    "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"

const styleCache = new Map<string, maplibregl.StyleSpecification>()

async function loadStyle(url: string): Promise<maplibregl.StyleSpecification> {
    const cached = styleCache.get(url)
    if (cached) return cached
    const res = await fetch(url)
    const style = (await res.json()) as maplibregl.StyleSpecification
    style.projection = { type: "mercator" }
    styleCache.set(url, style)
    return style
}

const formatPrice = (price: number) => {
    if (price >= 1000000) {
        return `$${(price / 1000000).toFixed(1)}M`
    }
    if (price >= 1000) {
        return `$${(price / 1000).toFixed(0)}K`
    }
    return `$${price}`
}

const createMarkerElement = (listing: Listing, isSelected: boolean) => {
    const el = document.createElement("div")
    el.className = cn(
        "pointer-events-auto cursor-pointer rounded-full bg-popover px-3 py-1.5 text-sm font-semibold text-popover-foreground shadow-md transition-shadow hover:z-50 hover:shadow-lg",
        isSelected && "ring-2 ring-primary"
    )
    el.textContent = formatPrice(listing.price)
    return el
}

type MapContainerProps = {
    selectedListing: Listing | null
    onListingSelect: (listing: Listing | null) => void
    onViewDetails: () => void
    flyToCoordinates?: [number, number] | null
    flyToZoom?: number
} & React.ComponentProps<"div">

export function MapContainer({
    selectedListing,
    onListingSelect,
    onViewDetails,
    flyToCoordinates,
    flyToZoom = 13,
    className,
    ...props
}: MapContainerProps) {
    const mapContainer = React.useRef<HTMLDivElement>(null)
    const wrapperRef = React.useRef<HTMLDivElement>(null)
    const mapRef = React.useRef<maplibregl.Map | null>(null)
    const markersRef = React.useRef<Map<string, maplibregl.Marker>>(new Map())
    const [tileError, setTileError] = React.useState(false)
    const [popupPosition, setPopupPosition] = React.useState<{
        x: number
        y: number
    } | null>(null)
    const { resolvedTheme } = useTheme()
    const themeRef = React.useRef(resolvedTheme)
    const onListingSelectRef = React.useRef(onListingSelect)

    React.useEffect(() => {
        themeRef.current = resolvedTheme
    }, [resolvedTheme])

    React.useEffect(() => {
        onListingSelectRef.current = onListingSelect
    }, [onListingSelect])

    React.useEffect(() => {
        if (!mapContainer.current) return

        const styleUrl =
            themeRef.current === "dark" ? CARTO_DARK_STYLE : CARTO_LIGHT_STYLE

        let cancelled = false

        loadStyle(styleUrl).then((style) => {
            if (cancelled || !mapContainer.current) return

            const map = new maplibregl.Map({
                container: mapContainer.current,
                style,
                center: [104.9282, 11.5564],
                zoom: 12,
                attributionControl: false,
            })

            map.addControl(new maplibregl.NavigationControl(), "bottom-right")

            map.on("load", () => {
                listings.forEach((listing) => {
                    const markerEl = createMarkerElement(listing, false)

                    markerEl.addEventListener("click", () => {
                        onListingSelectRef.current(listing)
                    })

                    const marker = new maplibregl.Marker({
                        element: markerEl,
                        anchor: "center",
                    })
                        .setLngLat(listing.coordinates)
                        .addTo(map)

                    markersRef.current.set(listing.id, marker)
                })
            })

            map.on("click", (e) => {
                const features = map.queryRenderedFeatures(e.point)
                if (features.length === 0) {
                    onListingSelectRef.current(null)
                }
            })

            map.on("error", () => {
                setTileError(true)
            })

            mapRef.current = map
        })

        return () => {
            cancelled = true
            mapRef.current?.remove()
            mapRef.current = null
        }
    }, [])

    // Switch map style when theme changes
    React.useEffect(() => {
        const map = mapRef.current
        if (!map || !resolvedTheme) return
        const styleUrl =
            resolvedTheme === "dark" ? CARTO_DARK_STYLE : CARTO_LIGHT_STYLE
        loadStyle(styleUrl).then((style) => {
            map.setStyle(style)
        })
    }, [resolvedTheme])

    // Update marker selection state
    React.useEffect(() => {
        markersRef.current.forEach((marker, id) => {
            const el = marker.getElement()
            if (id === selectedListing?.id) {
                el.classList.add("ring-2", "ring-primary")
            } else {
                el.classList.remove("ring-2", "ring-primary")
            }
        })
    }, [selectedListing])

    // Track popup position and fly to selected listing
    React.useEffect(() => {
        const map = mapRef.current
        if (!map) return

        if (selectedListing) {
            map.flyTo({
                center: selectedListing.coordinates,
                zoom: 15,
                essential: true,
            })

            const updatePosition = () => {
                const point = map.project(selectedListing.coordinates)
                setPopupPosition({ x: point.x, y: point.y })
            }

            updatePosition()
            map.on("move", updatePosition)

            return () => {
                map.off("move", updatePosition)
                setPopupPosition(null)
            }
        } else {
            setPopupPosition(null)
        }
    }, [selectedListing])

    // Fly to coordinates when search location changes
    React.useEffect(() => {
        if (flyToCoordinates && mapRef.current) {
            mapRef.current.flyTo({
                center: flyToCoordinates,
                zoom: flyToZoom,
                essential: true,
            })
        }
    }, [flyToCoordinates, flyToZoom])

    const popoverOpen = !!selectedListing && !!popupPosition

    return (
        <div ref={wrapperRef} className="relative h-full w-full">
            {tileError && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                    <p className="text-sm text-muted-foreground">
                        Map tiles failed to load. Please check your connection
                        and refresh.
                    </p>
                </div>
            )}
            <div
                ref={mapContainer}
                className={cn("h-full w-full", className)}
                {...props}
            />

            <Popover
                open={popoverOpen}
                onOpenChange={(open) => {
                    if (!open) onListingSelect(null)
                }}
            >
                {popupPosition && (
                    <PopoverAnchor
                        className="absolute z-20 size-0"
                        style={{
                            left: popupPosition.x,
                            top: popupPosition.y,
                        }}
                    />
                )}
                <PopoverContent
                    side="top"
                    sideOffset={24}
                    align="center"
                    className="pointer-events-auto w-[280px]"
                    onInteractOutside={(e) => {
                        const target = e.target as HTMLElement
                        if (target.closest(".maplibregl-marker")) {
                            e.preventDefault()
                        }
                    }}
                >
                    {selectedListing && (
                        <ListingPopup
                            listing={selectedListing}
                            onViewDetails={onViewDetails}
                        />
                    )}
                </PopoverContent>
            </Popover>
        </div>
    )
}

"use client"

import * as React from "react"
import maplibregl from "maplibre-gl"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { listings, type Listing } from "@/components/data/listings"
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
    const [displayListing, setDisplayListing] = React.useState<Listing | null>(
        null
    )
    const [isExiting, setIsExiting] = React.useState(false)
    const [exitPosition, setExitPosition] = React.useState<{
        x: number
        y: number
    } | null>(null)
    const exitTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(
        null
    )
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
        if (exitTimerRef.current) {
            clearTimeout(exitTimerRef.current)
            exitTimerRef.current = null
        }

        if (selectedListing) {
            setDisplayListing(selectedListing)
            setIsExiting(false)
        } else if (displayListing) {
            setIsExiting(true)
            exitTimerRef.current = setTimeout(() => {
                setDisplayListing(null)
                setIsExiting(false)
                setExitPosition(null)
            }, 200)
        }

        return () => {
            if (exitTimerRef.current) {
                clearTimeout(exitTimerRef.current)
            }
        }
    }, [selectedListing, displayListing])

    // Initialize map
    React.useEffect(() => {
        if (!mapContainer.current) return

        const initialStyleUrl =
            themeRef.current === "dark" ? CARTO_DARK_STYLE : CARTO_LIGHT_STYLE

        let map: maplibregl.Map

        loadStyle(initialStyleUrl).then((style) => {
            if (!mapContainer.current) return

            map = new maplibregl.Map({
                container: mapContainer.current,
                style,
                center: [104.9282, 11.5564],
                zoom: 12,
            })

            mapRef.current = map

            map.on("error", (e) => {
                const err = e.error as { status?: number } | undefined
                if (err && err.status && err.status !== 200) {
                    setTileError(true)
                }
            })

            map.on("load", () => {
                listings.forEach((listing) => {
                    const el = createMarkerElement(listing, false)
                    const marker = new maplibregl.Marker({
                        element: el,
                        anchor: "center",
                    })
                        .setLngLat(listing.coordinates)
                        .addTo(map)

                    el.addEventListener("click", (e) => {
                        e.stopPropagation()
                        onListingSelectRef.current(listing)
                    })

                    markersRef.current.set(listing.id, marker)
                })
            })
        })

        const currentMarkers = markersRef.current

        return () => {
            currentMarkers.forEach((marker) => {
                marker.remove()
            })
            currentMarkers.clear()
            map?.remove()
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
                const pos = { x: point.x, y: point.y }
                setPopupPosition(pos)
                setExitPosition(pos)
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

            {displayListing &&
                (popupPosition || isExiting) &&
                (() => {
                    const pos = isExiting ? exitPosition : popupPosition
                    if (!pos) return null
                    return (
                        <div
                            className={cn(
                                "pointer-events-auto absolute z-50 flex w-[280px] origin-(--radix-popover-content-transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-hidden dark:ring-foreground/10",
                                isExiting
                                    ? "animate-out duration-200 fade-out-0 zoom-out-95"
                                    : "animate-in duration-200 fade-in-0 zoom-in-95"
                            )}
                            style={{
                                left: pos.x,
                                top: pos.y,
                                transform:
                                    "translate(-50%, calc(-100% - 12px))",
                                transition: isExiting
                                    ? undefined
                                    : "left 200ms ease-out, top 200ms ease-out",
                            }}
                        >
                            <div
                                key={displayListing.id}
                                className="animate-in duration-200 fade-in-0"
                            >
                                <ListingPopup
                                    listing={displayListing}
                                    onViewDetails={onViewDetails}
                                />
                            </div>
                        </div>
                    )
                })()}
        </div>
    )
}

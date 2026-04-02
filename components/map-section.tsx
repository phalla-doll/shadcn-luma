"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { type Listing } from "@/components/data/listings"
import { type Location } from "@/components/data/locations"
import { SearchBar } from "@/components/search/search-bar"

const MapContainer = dynamic(
    () =>
        import("@/components/map/map-container").then(
            (mod) => mod.MapContainer
        ),
    { ssr: false }
)

function MapSection({ className }: { className?: string }) {
    const [selectedListing, setSelectedListing] =
        React.useState<Listing | null>(null)
    const [flyToCoordinates, setFlyToCoordinates] = React.useState<
        [number, number] | null
    >(null)
    const [flyToZoom, setFlyToZoom] = React.useState(13)

    const handleListingSelect = React.useCallback((listing: Listing | null) => {
        setSelectedListing(listing)
    }, [])

    const handleLocationSelect = React.useCallback((location: Location) => {
        setFlyToCoordinates(location.coordinates)
        setFlyToZoom(location.zoom)
        setSelectedListing(null)
    }, [])

    return (
        <div className={className}>
            <MapContainer
                selectedListing={selectedListing}
                onListingSelect={handleListingSelect}
                flyToCoordinates={flyToCoordinates}
                flyToZoom={flyToZoom}
            />

            <SearchBar onLocationSelectAction={handleLocationSelect} />
        </div>
    )
}

export { MapSection }

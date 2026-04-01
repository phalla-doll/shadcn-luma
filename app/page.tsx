"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { type Listing } from "@/components/data/listings"
import { type Location } from "@/components/data/locations"
import { SearchBar } from "@/components/search/search-bar"
import { ListingsSheet } from "@/components/listings/listings-sheet"
import { ListingDetail } from "@/components/listings/listing-detail"

const MapContainer = dynamic(
    () =>
        import("@/components/map/map-container").then(
            (mod) => mod.MapContainer
        ),
    { ssr: false }
)

export default function Page() {
    const [selectedListing, setSelectedListing] =
        React.useState<Listing | null>(null)
    const [detailOpen, setDetailOpen] = React.useState(false)
    const [flyToCoordinates, setFlyToCoordinates] = React.useState<
        [number, number] | null
    >(null)
    const [flyToZoom, setFlyToZoom] = React.useState(13)

    const handleListingSelect = React.useCallback((listing: Listing | null) => {
        setSelectedListing(listing)
        if (listing) {
            setDetailOpen(true)
        }
    }, [])

    const handleLocationSelect = React.useCallback((location: Location) => {
        setFlyToCoordinates(location.coordinates)
        setFlyToZoom(location.zoom)
        setSelectedListing(null)
    }, [])

    const handleDetailOpenChange = React.useCallback((open: boolean) => {
        setDetailOpen(open)
        if (!open) {
            setSelectedListing(null)
        }
    }, [])

    return (
        <div className="relative h-screen w-screen">
            {/* Map */}
            <MapContainer
                selectedListing={selectedListing}
                onListingSelect={handleListingSelect}
                flyToCoordinates={flyToCoordinates}
                flyToZoom={flyToZoom}
            />

            {/* Search bar */}
            <SearchBar onLocationSelect={handleLocationSelect} />

            {/* Listings sheet */}
            <ListingsSheet
                selectedListing={selectedListing}
                onListingSelect={handleListingSelect}
            />

            {/* Listing detail sheet */}
            <ListingDetail
                listing={selectedListing}
                open={detailOpen}
                onOpenChange={handleDetailOpenChange}
            />
        </div>
    )
}

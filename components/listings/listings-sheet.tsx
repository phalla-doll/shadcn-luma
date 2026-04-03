"use client"

import * as React from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { listings, type Listing } from "@/components/data/listings"
import { ListingCard } from "./listing-card"
import { HugeiconsIcon } from "@hugeicons/react"
import { ListViewIcon } from "@hugeicons/core-free-icons"
import { trackEvent } from "@/lib/analytics"

type ListingsSheetProps = {
    selectedListing: Listing | null
    onListingSelectAction: (listing: Listing) => void
}

export function ListingsSheet({
    selectedListing,
    onListingSelectAction,
}: ListingsSheetProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <Button
                data-slot="listings-fab"
                size="icon-lg"
                className="fixed bottom-6 left-6 z-40 rounded-full shadow-lg"
                onClick={() => {
                    setOpen(true)
                    trackEvent("listings_open")
                }}
            >
                <HugeiconsIcon icon={ListViewIcon} />
                <span className="sr-only">View listings</span>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
                <SheetContent side="left" className="w-full sm:max-w-md">
                    <SheetHeader>
                        <SheetTitle>
                            {listings.length} properties in this area
                        </SheetTitle>
                        <SheetDescription>
                            Browse available properties and select one to view
                            details
                        </SheetDescription>
                    </SheetHeader>

                    <div className="mt-6 flex flex-col gap-4 overflow-y-auto px-6 pb-6">
                        {listings.map((listing) => (
                            <ListingCard
                                key={listing.id}
                                listing={listing}
                                isSelected={selectedListing?.id === listing.id}
                                onClick={() => {
                                    onListingSelectAction(listing)
                                    trackEvent("listing_select", {
                                        id: listing.id,
                                        label: listing.address,
                                    })
                                    setOpen(false)
                                }}
                            />
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

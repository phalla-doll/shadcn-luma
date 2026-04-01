"use client"

import * as React from "react"
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { listings, type Listing } from "@/components/data/listings"
import { ListingCard } from "./listing-card"

type ListingsDrawerProps = {
    selectedListing: Listing | null
    onListingSelect: (listing: Listing) => void
}

export function ListingsDrawer({
    selectedListing,
    onListingSelect,
}: ListingsDrawerProps) {
    const [open, setOpen] = React.useState(true)

    return (
        <Drawer open={open} onOpenChange={setOpen} direction="bottom">
            <DrawerContent className="h-[40vh]">
                <DrawerHeader className="pb-2">
                    <DrawerTitle className="text-base">
                        {listings.length} properties in this area
                    </DrawerTitle>
                </DrawerHeader>

                <div className="flex-1 overflow-hidden px-4 pb-4">
                    <ScrollArea className="h-full">
                        <div className="flex gap-4 pb-4">
                            {listings.map((listing) => (
                                <ListingCard
                                    key={listing.id}
                                    listing={listing}
                                    isSelected={
                                        selectedListing?.id === listing.id
                                    }
                                    onClick={() => onListingSelect(listing)}
                                />
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </DrawerContent>
        </Drawer>
    )
}

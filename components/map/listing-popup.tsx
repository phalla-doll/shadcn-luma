"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type Listing } from "@/components/data/listings"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    BedSingle01Icon,
    Bathtub01Icon,
    RulerIcon,
    ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

type ListingPopupProps = {
    listing: Listing
    onViewDetails: () => void
}

export function ListingPopup({ listing, onViewDetails }: ListingPopupProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(price)
    }

    return (
        <div className="w-full space-y-3">
            <div className="aspect-video w-full rounded-md bg-gradient-to-br from-primary/20 to-primary/5" />

            <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                    {formatPrice(listing.price)}
                </span>
                <Badge variant="secondary" className="text-xs">
                    {listing.type}
                </Badge>
            </div>

            {(listing.beds !== null ||
                listing.baths !== null ||
                listing.sqft !== null) && (
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    {listing.beds !== null && (
                        <span className="flex items-center gap-1">
                            <HugeiconsIcon
                                icon={BedSingle01Icon}
                                className="size-3.5"
                            />
                            {listing.beds === 0 ? "Studio" : listing.beds}
                        </span>
                    )}
                    {listing.baths !== null && (
                        <span className="flex items-center gap-1">
                            <HugeiconsIcon
                                icon={Bathtub01Icon}
                                className="size-3.5"
                            />
                            {listing.baths}
                        </span>
                    )}
                    {listing.sqft !== null && (
                        <span className="flex items-center gap-1">
                            <HugeiconsIcon
                                icon={RulerIcon}
                                className="size-3.5"
                            />
                            {listing.sqft.toLocaleString()} ft²
                        </span>
                    )}
                </div>
            )}

            <p className="truncate text-xs text-muted-foreground">
                {listing.district}
            </p>

            <Button size="sm" className="w-full" onClick={onViewDetails}>
                View Details
                <HugeiconsIcon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
        </div>
    )
}

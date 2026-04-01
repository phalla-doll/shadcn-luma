"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { type Listing } from "@/components/data/listings"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    BedSingle01Icon,
    Bathtub01Icon,
    RulerIcon,
} from "@hugeicons/core-free-icons"

type ListingCardProps = {
    listing: Listing
    isSelected: boolean
    onClick: () => void
} & React.ComponentProps<"button">

export function ListingCard({
    listing,
    isSelected,
    onClick,
    className,
    ...props
}: ListingCardProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(price)
    }

    return (
        <button
            className={cn(
                "flex w-[280px] cursor-pointer flex-col gap-2 rounded-lg border bg-card p-2 text-left shadow-sm transition-all hover:shadow-md",
                isSelected && "ring-2 ring-primary",
                className
            )}
            onClick={onClick}
            {...props}
        >
            {/* Image placeholder */}
            <div className="aspect-video w-full rounded-md bg-gradient-to-br from-primary/20 to-primary/5" />

            <div className="flex flex-col gap-1">
                {/* Price and type */}
                <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold">
                        {formatPrice(listing.price)}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                        {listing.type}
                    </Badge>
                </div>

                {/* Property details */}
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

                {/* Location */}
                <p className="truncate text-xs text-muted-foreground">
                    {listing.district}
                </p>
            </div>
        </button>
    )
}

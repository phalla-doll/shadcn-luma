"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { type Listing } from "@/components/data/listings"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    BedSingle01Icon,
    Bathtub01Icon,
    RulerIcon,
} from "@hugeicons/core-free-icons"

type ListingPopupProps = {
    listing: Listing
}

export function ListingPopup({ listing }: ListingPopupProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(price)
    }

    return (
        <div className="w-full space-y-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                    src={listing.image}
                    alt={listing.type}
                    fill
                    className="object-cover"
                />
            </div>

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
                <div className="grid grid-cols-3 gap-2">
                    {listing.beds !== null && (
                        <div className="flex flex-col items-center gap-1 rounded-md bg-muted p-2">
                            <HugeiconsIcon
                                icon={BedSingle01Icon}
                                className="size-4 text-muted-foreground"
                            />
                            <span className="text-sm font-semibold">
                                {listing.beds === 0 ? "Studio" : listing.beds}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                                Beds
                            </span>
                        </div>
                    )}
                    {listing.baths !== null && (
                        <div className="flex flex-col items-center gap-1 rounded-md bg-muted p-2">
                            <HugeiconsIcon
                                icon={Bathtub01Icon}
                                className="size-4 text-muted-foreground"
                            />
                            <span className="text-sm font-semibold">
                                {listing.baths}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                                Baths
                            </span>
                        </div>
                    )}
                    {listing.sqft !== null && (
                        <div className="flex flex-col items-center gap-1 rounded-md bg-muted p-2">
                            <HugeiconsIcon
                                icon={RulerIcon}
                                className="size-4 text-muted-foreground"
                            />
                            <span className="text-sm font-semibold">
                                {listing.sqft.toLocaleString()}
                            </span>
                            <span className="text-[10px] text-muted-foreground">
                                Sq Ft
                            </span>
                        </div>
                    )}
                </div>
            )}

            <p className="truncate text-xs text-muted-foreground">
                {listing.district}
            </p>

            <Button size="sm" className="w-full">
                View Detail
            </Button>
        </div>
    )
}

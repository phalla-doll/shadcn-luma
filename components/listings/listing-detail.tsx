"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { type Listing } from "@/components/data/listings"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    BedSingle01Icon,
    Bathtub01Icon,
    RulerIcon,
    SmartPhoneIcon,
    Calendar01Icon,
    MapPinIcon,
} from "@hugeicons/core-free-icons"

type ListingDetailProps = {
    listing: Listing | null
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function ListingDetail({
    listing,
    open,
    onOpenChange,
}: ListingDetailProps) {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
        }).format(price)
    }

    if (!listing) return null

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent side="right" className="w-full sm:max-w-md">
                <SheetHeader>
                    <SheetTitle>Property Details</SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-6 overflow-y-auto px-6 pb-6">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                        <Image
                            src={listing.image}
                            alt={listing.type}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Price and type */}
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">
                                {formatPrice(listing.price)}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                {listing.address}
                            </p>
                        </div>
                        <Badge variant="secondary">{listing.type}</Badge>
                    </div>

                    <Separator />

                    {/* Property details */}
                    <div className="grid grid-cols-3 gap-4">
                        {listing.beds !== null && (
                            <div className="flex flex-col items-center gap-1 rounded-lg bg-muted p-3">
                                <HugeiconsIcon
                                    icon={BedSingle01Icon}
                                    className="size-5 text-muted-foreground"
                                />
                                <span className="text-lg font-semibold">
                                    {listing.beds === 0
                                        ? "Studio"
                                        : listing.beds}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    Bedrooms
                                </span>
                            </div>
                        )}
                        {listing.baths !== null && (
                            <div className="flex flex-col items-center gap-1 rounded-lg bg-muted p-3">
                                <HugeiconsIcon
                                    icon={Bathtub01Icon}
                                    className="size-5 text-muted-foreground"
                                />
                                <span className="text-lg font-semibold">
                                    {listing.baths}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    Bathrooms
                                </span>
                            </div>
                        )}
                        {listing.sqft !== null && (
                            <div className="flex flex-col items-center gap-1 rounded-lg bg-muted p-3">
                                <HugeiconsIcon
                                    icon={RulerIcon}
                                    className="size-5 text-muted-foreground"
                                />
                                <span className="text-lg font-semibold">
                                    {listing.sqft.toLocaleString()}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    Sq Ft
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm">
                        <HugeiconsIcon
                            icon={MapPinIcon}
                            className="size-4 text-muted-foreground"
                        />
                        <span>{listing.district}</span>
                    </div>

                    <Separator />

                    {/* Description */}
                    <div>
                        <h3 className="mb-2 font-semibold">Description</h3>
                        <p className="text-sm text-muted-foreground">
                            {listing.description}
                        </p>
                    </div>

                    <Separator />

                    {/* Agent card */}
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarFallback>
                                {listing.agent.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                            <p className="font-medium">{listing.agent.name}</p>
                            <p className="flex items-center gap-1 text-sm text-muted-foreground">
                                <HugeiconsIcon
                                    icon={SmartPhoneIcon}
                                    className="size-3.5"
                                />
                                {listing.agent.phone}
                            </p>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2">
                        <Button className="flex-1">
                            <HugeiconsIcon
                                icon={Calendar01Icon}
                                className="mr-2 size-4"
                            />
                            Schedule Viewing
                        </Button>
                        <Button variant="outline" size="icon">
                            <HugeiconsIcon
                                icon={SmartPhoneIcon}
                                className="size-4"
                            />
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

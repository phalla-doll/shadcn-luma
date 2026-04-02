"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { type Listing } from "@/components/data/listings"

type MapMarkerProps = {
    listing: Listing
    isSelected: boolean
    onClick: () => void
}

export function MapMarker({ listing, isSelected, onClick }: MapMarkerProps) {
    const el = React.useRef<HTMLDivElement>(null)

    const formatPrice = (price: number) => {
        if (price >= 1000000) {
            return `$${(price / 1000000).toFixed(1)}M`
        }
        if (price >= 1000) {
            return `$${(price / 1000).toFixed(0)}K`
        }
        return `$${price}`
    }

    React.useEffect(() => {
        const element = el.current
        if (element) {
            element.addEventListener("click", onClick)
            return () => element.removeEventListener("click", onClick)
        }
    }, [onClick])

    return (
        <div
            ref={el}
            className={cn(
                "cursor-pointer rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-110",
                isSelected && "ring-2 ring-primary"
            )}
        >
            {formatPrice(listing.price)}
        </div>
    )
}

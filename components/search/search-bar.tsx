"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { HugeiconsIcon } from "@hugeicons/react"
import { MapPinIcon, SearchIcon } from "@hugeicons/core-free-icons"
import { locations, type Location } from "@/components/data/locations"

type SearchBarProps = {
    onLocationSelectAction: (location: Location) => void
}

export function SearchBar({ onLocationSelectAction }: SearchBarProps) {
    const [open, setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState<Location | null>(null)
    const [query, setQuery] = React.useState("")

    return (
        <div className="absolute top-4 left-1/2 z-10 w-full max-w-md -translate-x-1/2 px-4">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between bg-background/95 backdrop-blur-sm"
                    >
                        <span className="flex items-center gap-2">
                            <HugeiconsIcon
                                icon={MapPinIcon}
                                className="size-4 text-muted-foreground"
                            />
                            {selected ? selected.name : "Search location..."}
                        </span>
                        <HugeiconsIcon
                            icon={SearchIcon}
                            className="ml-2 size-4 shrink-0 opacity-50"
                        />
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-[--radix-popover-trigger-width] p-0"
                    align="start"
                >
                    <Command>
                        <CommandInput
                            placeholder="Search locations..."
                            value={query}
                            onValueChange={setQuery}
                        />
                        <CommandList>
                            <CommandEmpty>No location found.</CommandEmpty>
                            <CommandGroup heading="Phnom Penh">
                                {locations.map((location) => (
                                    <CommandItem
                                        key={location.name}
                                        value={location.name}
                                        onSelect={() => {
                                            setSelected(location)
                                            onLocationSelectAction(location)
                                            setOpen(false)
                                        }}
                                    >
                                        <span className="flex items-center gap-2">
                                            <HugeiconsIcon
                                                icon={MapPinIcon}
                                                className="size-4 text-muted-foreground"
                                            />
                                            {location.name}
                                        </span>
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}

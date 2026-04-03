"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    Sun01Icon,
    Moon01Icon,
    GithubIcon,
    ArrowRight01Icon,
    ArrowRight02Icon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { trackEvent } from "@/lib/analytics"

import ComponentShowcase from "@/app/component-showcase/index"
import { MapSection } from "@/components/map-section"
import { Kbd } from "@/components/ui/kbd"

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => {
                const next = resolvedTheme === "dark" ? "light" : "dark"
                setTheme(next)
                trackEvent("theme_toggle", { theme: next })
            }}
            aria-label="Toggle theme"
        >
            {mounted && (
                <HugeiconsIcon
                    icon={resolvedTheme === "dark" ? Sun01Icon : Moon01Icon}
                    strokeWidth={2}
                />
            )}
        </Button>
    )
}

export default function Page() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/4 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 h-100 w-100 rounded-full bg-primary/3 blur-[100px]" />
            </div>

            <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-12 lg:py-20">
                <header className="flex items-center justify-between">
                    <Logo />
                    <nav className="flex items-center gap-1">
                        <p className="font-mono text-sm tracking-tight">
                            Press <Kbd className="rounded-md">d</Kbd> to toggle
                            dark mode
                        </p>
                        <ThemeToggle />
                    </nav>
                </header>

                <section className="flex flex-col items-center gap-8 text-center">
                    <Badge
                        variant="secondary"
                        className="animate-in cursor-pointer duration-500 fade-in"
                        asChild
                    >
                        <span>
                            <a
                                href="#map"
                                onClick={() =>
                                    trackEvent("scroll_to_section", {
                                        section: "map",
                                    })
                                }
                            >
                                New Interactive Map
                            </a>
                            <HugeiconsIcon
                                icon={ArrowRight02Icon}
                                strokeWidth={2}
                                data-icon="inline-end"
                            />
                        </span>
                    </Badge>
                    <h1 className="max-w-3xl animate-in text-3xl leading-[1.1] font-medium tracking-tight duration-700 fade-in slide-in-from-bottom-4 md:text-5xl">
                        Discover curated UI components that{" "}
                        <span className="bg-linear-to-r from-primary via-blue-600 to-blue-500 bg-clip-text text-transparent">
                            feel good
                        </span>{" "}
                        to use
                    </h1>
                    <p className="max-w-xl animate-in text-lg text-muted-foreground duration-700 [animation-delay:100ms] fade-in slide-in-from-bottom-4">
                        Learn proper composition patterns for shadcn/ui
                        components. Every specimen below is interactive —
                        explore the building blocks.
                    </p>
                    <div className="flex animate-in items-center gap-3 duration-700 [animation-delay:200ms] fade-in slide-in-from-bottom-4">
                        <Button
                            size="lg"
                            asChild
                            onClick={() =>
                                trackEvent("scroll_to_section", {
                                    section: "components",
                                })
                            }
                        >
                            <a href="#components">
                                Browse Components
                                <HugeiconsIcon
                                    icon={ArrowRight01Icon}
                                    strokeWidth={2}
                                    data-icon="inline-end"
                                />
                            </a>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a
                                href="https://github.com/phalla-doll/shadcn-luma"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() =>
                                    trackEvent("outbound_click", {
                                        url: "github.com/phalla-doll/shadcn-luma",
                                        label: "view_source",
                                    })
                                }
                            >
                                <HugeiconsIcon
                                    icon={GithubIcon}
                                    strokeWidth={2}
                                    data-icon="inline-start"
                                />
                                View Source
                            </a>
                        </Button>
                    </div>
                </section>
            </div>

            <div id="components" className="mb-2">
                <ComponentShowcase />
            </div>

            <div id="map" className="scroll-mt-16 bg-muted/50 p-6 md:p-10">
                <MapSection className="relative h-[65vh] rounded-2xl" />
            </div>

            <div className="relative mx-auto mt-10 flex max-w-7xl justify-center px-6 pb-12">
                <footer className="flex items-center justify-center gap-1 font-mono text-xs text-muted-foreground">
                    <span>Built with</span>
                    <Badge variant="secondary" className="font-mono text-xs">
                        shadcn/ui
                    </Badge>
                    <span>by</span>
                    <a
                        href="https://manthaa.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        onClick={() =>
                            trackEvent("outbound_click", {
                                url: "manthaa.dev",
                                label: "mantha",
                            })
                        }
                    >
                        Mantha
                    </a>
                </footer>
            </div>
        </div>
    )
}

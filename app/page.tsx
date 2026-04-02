"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    Sun01Icon,
    Moon01Icon,
    GithubIcon,
    ArrowRight01Icon,
} from "@hugeicons/core-free-icons"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

import Preview02Example from "@/app/preview-02/index"
import { MapSection } from "@/components/map-section"

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
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
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
        <div className="relative min-h-screen">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/4 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 h-100 w-100 rounded-full bg-primary/3 blur-[100px]" />
            </div>

            <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-12 lg:py-20">
                <header className="flex items-center justify-between">
                    <Logo />
                    <nav className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                            Docs
                        </Button>
                        <Button variant="ghost" size="sm">
                            Components
                        </Button>
                        <Button variant="ghost" size="icon-sm" asChild>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HugeiconsIcon
                                    icon={GithubIcon}
                                    strokeWidth={2}
                                />
                            </a>
                        </Button>
                        <ThemeToggle />
                    </nav>
                </header>

                <section className="flex flex-col items-center gap-8 text-center">
                    <Badge
                        variant="secondary"
                        className="animate-in duration-500 fade-in"
                    >
                        55+ Production-Grade Components
                    </Badge>
                    <h1 className="max-w-3xl animate-in text-3xl leading-[1.1] font-medium tracking-tight duration-700 fade-in slide-in-from-bottom-4 md:text-5xl">
                        Build interfaces{" "}
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            people actually
                        </span>{" "}
                        want to use
                    </h1>
                    <p className="max-w-xl animate-in text-lg text-muted-foreground duration-700 [animation-delay:100ms] fade-in slide-in-from-bottom-4">
                        Learn proper composition patterns for shadcn/ui
                        components. Every specimen below is interactive —
                        explore the building blocks.
                    </p>
                    <div className="flex animate-in items-center gap-3 duration-700 [animation-delay:200ms] fade-in slide-in-from-bottom-4">
                        <Button size="lg">
                            Browse Components
                            <HugeiconsIcon
                                icon={ArrowRight01Icon}
                                strokeWidth={2}
                                data-icon="inline-end"
                            />
                        </Button>
                        <Button variant="outline" size="lg">
                            <HugeiconsIcon
                                icon={GithubIcon}
                                strokeWidth={2}
                                data-icon="inline-start"
                            />
                            View Source
                        </Button>
                    </div>
                </section>
            </div>

            <Preview02Example />

            <div className="my-5 rounded-3xl bg-muted p-6 md:p-10">
                <MapSection className="relative h-[65vh] overflow-hidden rounded-2xl" />
            </div>

            <div className="relative mx-auto mt-10 flex max-w-7xl justify-center px-6 pb-12">
                <footer className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span>Built with</span>
                    <Badge variant="secondary" className="font-mono text-xs">
                        shadcn/ui
                    </Badge>
                    <span>+</span>
                    <Badge variant="secondary" className="font-mono text-xs">
                        Radix
                    </Badge>
                    <span>+</span>
                    <Badge variant="secondary" className="font-mono text-xs">
                        Tailwind v4
                    </Badge>
                    <span>·</span>
                    <span>by</span>
                    <a
                        href="https://manthaa.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                        Mantha
                    </a>
                </footer>
            </div>
        </div>
    )
}

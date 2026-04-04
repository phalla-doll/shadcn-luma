"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"
import { TabsList, TabsTrigger, TabsContent } from "fumadocs-ui/components/tabs"
import { Tabs as FumadocsTabs } from "fumadocs-ui/components/ui/tabs"

type MaxWidth = "sm" | "md" | "lg" | false

const maxWidthMap: Record<Exclude<MaxWidth, false>, string> = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
}

interface CodeViewerProps {
    component: React.ReactNode
    code: string
    lang?: string
    className?: string
    maxWidth?: MaxWidth
}

export type CodeViewerTabItem = {
    value: string
    label: string
    code: string
}

interface CodeViewerWithTabsProps {
    component: React.ReactNode
    tabs: CodeViewerTabItem[]
    defaultTab?: string
    lang?: string
    className?: string
    maxWidth?: MaxWidth
}

function Preview({
    children,
    maxWidth = "md",
}: {
    children: React.ReactNode
    maxWidth?: MaxWidth
}) {
    return (
        <div className="flex items-center justify-center rounded-md border bg-background p-8">
            <div
                className={cn(
                    "not-prose w-full",
                    maxWidth && maxWidthMap[maxWidth]
                )}
            >
                {children}
            </div>
        </div>
    )
}

const codeBlockOptions = {
    themes: {
        light: "github-light",
        dark: "github-dark",
    },
} as const

export function CodeViewer({
    component,
    code,
    lang = "tsx",
    className,
    maxWidth = "md",
}: CodeViewerProps) {
    return (
        <div className={cn("space-y-4", className)}>
            <Preview maxWidth={maxWidth}>{component}</Preview>
            <DynamicCodeBlock
                lang={lang}
                code={code}
                options={codeBlockOptions}
            />
        </div>
    )
}

export function CodeViewerWithTabs({
    component,
    tabs,
    defaultTab,
    lang = "tsx",
    className,
    maxWidth = "md",
}: CodeViewerWithTabsProps) {
    const fallback = tabs[0]?.value ?? ""
    const [tab, setTab] = React.useState(defaultTab ?? fallback)

    return (
        <div className={cn("space-y-4", className)}>
            <Preview maxWidth={maxWidth}>{component}</Preview>
            {/* Fumadocs tab styles: fd-* tokens, underline active state, card shell — see fumadocs-ui/components/tabs */}
            <FumadocsTabs
                value={tab}
                onValueChange={setTab}
                className="not-prose flex flex-col gap-0 overflow-hidden rounded-xl border bg-fd-secondary"
            >
                <TabsList className="min-w-0 px-3 sm:px-4">
                    {tabs.map((item) => (
                        <TabsTrigger key={item.value} value={item.value}>
                            {item.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((item) => (
                    <TabsContent key={item.value} value={item.value}>
                        <DynamicCodeBlock
                            lang={lang}
                            code={item.code}
                            options={codeBlockOptions}
                        />
                    </TabsContent>
                ))}
            </FumadocsTabs>
        </div>
    )
}

"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock"

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

function Preview({
    children,
    maxWidth = "md",
}: {
    children: React.ReactNode
    maxWidth?: MaxWidth
}) {
    return (
        <div className="flex items-center justify-center rounded-md border bg-background p-8">
            <div className={cn("w-full", maxWidth && maxWidthMap[maxWidth])}>
                {children}
            </div>
        </div>
    )
}

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
                options={{
                    themes: {
                        light: "github-light",
                        dark: "github-dark",
                    },
                }}
            />
        </div>
    )
}

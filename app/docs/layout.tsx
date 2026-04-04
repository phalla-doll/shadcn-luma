"use client"

import { getPageTree } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { RootProvider } from "fumadocs-ui/provider/next"
import type { ReactNode } from "react"

export default function DocsRootLayout({ children }: { children: ReactNode }) {
    return (
        <RootProvider>
            <DocsLayout tree={getPageTree()} nav={{ title: "UI Components" }}>
                {children}
            </DocsLayout>
        </RootProvider>
    )
}

"use client"

import { HugeiconsIcon } from "@hugeicons/react"
import { GithubIcon } from "@hugeicons/core-free-icons"
import { getPageTree } from "@/lib/source"
import { DocsLayout } from "fumadocs-ui/layouts/docs"
import { RootProvider } from "fumadocs-ui/provider/next"
import type { ReactNode } from "react"

const GITHUB_REPO_URL = "https://github.com/phalla-doll/shadcn-luma"

export default function DocsRootLayout({ children }: { children: ReactNode }) {
    return (
        <RootProvider>
            <DocsLayout
                tree={getPageTree()}
                nav={{ title: "UI Components" }}
                links={[
                    {
                        type: "icon",
                        on: "menu",
                        url: GITHUB_REPO_URL,
                        label: "GitHub repository",
                        text: "GitHub",
                        external: true,
                        icon: (
                            <span className="flex items-center gap-2">
                                <HugeiconsIcon
                                    icon={GithubIcon}
                                    strokeWidth={2}
                                />
                                <span className="text-xs font-medium">
                                    GitHub
                                </span>
                            </span>
                        ),
                    },
                ]}
            >
                {children}
            </DocsLayout>
        </RootProvider>
    )
}

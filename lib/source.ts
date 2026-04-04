import { docs } from "../.source/server"
import { loader } from "fumadocs-core/source"
import type { Folder, Item, Root } from "fumadocs-core/page-tree"

const EXAMPLES = [
    "account-access",
    "album-card",
    "card-overview",
    "catalog-toolbar",
    "claimable-balance",
    "contribution-history",
    "cover-art",
    "dividend-income",
    "empty-connect-bank",
    "empty-distribute-track",
    "empty-explore-catalog",
    "faq",
    "front-door",
    "index-investing",
    "kitchen-island",
    "loading-card",
    "new-milestone",
    "notification-settings",
    "payments",
    "payout-threshold",
    "power-usage",
    "preferences",
    "qr-connect",
    "receiving-method",
    "recent-transactions",
    "release-catalog",
    "roller-shades",
    "savings-progress",
    "savings-targets",
    "sidebar-nav",
    "social-links",
    "stock-performance",
    "syncing-state",
    "transfer-funds",
    "upcoming-payments",
]

function toTitle(slug: string) {
    return slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
}

export const source = loader({
    baseUrl: "/docs",
    source: docs.toFumadocsSource(),
})

export function getPageTree(): Root {
    const tree = source.getPageTree()
    const children = tree.children.map((node) => {
        if (
            node.type === "page" &&
            "url" in node &&
            node.url === "/docs/examples"
        ) {
            return {
                type: "folder" as const,
                name: "Examples",
                defaultOpen: true,
                index: {
                    type: "page" as const,
                    name: "Overview",
                    url: "/docs/examples",
                },
                children: EXAMPLES.map(
                    (slug): Item => ({
                        type: "page",
                        name: toTitle(slug),
                        url: `/docs/examples/${slug}`,
                    })
                ),
            } satisfies Folder
        }
        return node
    })
    return { ...tree, children }
}

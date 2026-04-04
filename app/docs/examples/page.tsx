import { DocsPage, DocsBody } from "fumadocs-ui/layouts/docs/page"
import Link from "next/link"

const components = [
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

export default function ComponentsPage() {
    return (
        <DocsPage>
            <DocsBody>
                <h1>Examples</h1>
                <p className="text-muted-foreground">
                    A collection of 35 ready-to-use UI component examples.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {components.map((name) => (
                        <Link
                            key={name}
                            href={`/docs/examples/${name}`}
                            className="flex items-center justify-center rounded-md border p-3 text-sm transition-colors hover:bg-muted hover:text-foreground"
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </DocsBody>
        </DocsPage>
    )
}

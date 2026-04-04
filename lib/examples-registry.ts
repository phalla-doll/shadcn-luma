export type Category =
    | "finance"
    | "smart-home"
    | "music"
    | "empty-states"
    | "general"

export interface ExampleMeta {
    slug: string
    title: string
    description: string
    category: Category
}

export const CATEGORIES: Record<Category, string> = {
    finance: "Finance",
    "smart-home": "Smart Home",
    music: "Music",
    "empty-states": "Empty States",
    general: "General",
}

export const EXAMPLES: ExampleMeta[] = [
    {
        slug: "account-access",
        title: "Account Access",
        description: "Account access and security management card",
        category: "general",
    },
    {
        slug: "album-card",
        title: "Album Card",
        description: "Album card with cover art and streaming stats",
        category: "music",
    },
    {
        slug: "card-overview",
        title: "Card Overview",
        description: "Overview card with summary metrics",
        category: "finance",
    },
    {
        slug: "catalog-toolbar",
        title: "Catalog Toolbar",
        description:
            "Toolbar with search and toggle group for catalog filtering",
        category: "music",
    },
    {
        slug: "claimable-balance",
        title: "Claimable Balance",
        description: "Claimable balance card with pending status",
        category: "finance",
    },
    {
        slug: "contribution-history",
        title: "Contribution History",
        description: "Contribution history with bar chart and upcoming details",
        category: "finance",
    },
    {
        slug: "cover-art",
        title: "Cover Art",
        description: "Cover art upload component with file input",
        category: "music",
    },
    {
        slug: "dividend-income",
        title: "Dividend Income",
        description: "Quarterly dividend income with mini charts",
        category: "finance",
    },
    {
        slug: "empty-connect-bank",
        title: "Empty Connect Bank",
        description: "Empty state for connecting a bank account",
        category: "empty-states",
    },
    {
        slug: "empty-distribute-track",
        title: "Empty Distribute Track",
        description: "Empty state for distributing a track",
        category: "empty-states",
    },
    {
        slug: "empty-explore-catalog",
        title: "Empty Explore Catalog",
        description: "Empty state for exploring catalog",
        category: "empty-states",
    },
    {
        slug: "faq",
        title: "FAQ",
        description: "FAQ card with accordion tabs for General, Billing, Goals",
        category: "general",
    },
    {
        slug: "front-door",
        title: "Front Door",
        description: "Smart lock front door card with live status",
        category: "smart-home",
    },
    {
        slug: "index-investing",
        title: "Index Investing",
        description: "Dollar-cost averaging explanation card",
        category: "finance",
    },
    {
        slug: "kitchen-island",
        title: "Kitchen Island",
        description:
            "Smart home kitchen island light control with scenes and sliders",
        category: "smart-home",
    },
    {
        slug: "loading-card",
        title: "Loading Card",
        description: "Loading skeleton card with placeholders",
        category: "empty-states",
    },
    {
        slug: "new-milestone",
        title: "New Milestone",
        description: "New milestone goal form card",
        category: "general",
    },
    {
        slug: "notification-settings",
        title: "Notification Settings",
        description: "Notification preferences with checkboxes",
        category: "general",
    },
    {
        slug: "payments",
        title: "Payments",
        description: "Payments settings with navigation links",
        category: "finance",
    },
    {
        slug: "payout-threshold",
        title: "Payout Threshold",
        description: "Payout threshold settings with slider",
        category: "finance",
    },
    {
        slug: "power-usage",
        title: "Power Usage",
        description: "Power usage with bar chart and battery level",
        category: "smart-home",
    },
    {
        slug: "preferences",
        title: "Preferences",
        description: "User preferences with switches and select",
        category: "general",
    },
    {
        slug: "qr-connect",
        title: "QR Connect",
        description: "QR code for mobile device connection",
        category: "general",
    },
    {
        slug: "receiving-method",
        title: "Receiving Method",
        description: "Receiving method selection with radio options",
        category: "finance",
    },
    {
        slug: "recent-transactions",
        title: "Recent Transactions",
        description: "Recent transactions table with actions",
        category: "finance",
    },
    {
        slug: "release-catalog",
        title: "Release Catalog",
        description: "Release catalog with search and filter",
        category: "music",
    },
    {
        slug: "roller-shades",
        title: "Roller Shades",
        description: "Roller shades control with position slider",
        category: "smart-home",
    },
    {
        slug: "savings-progress",
        title: "Savings Progress",
        description: "Savings progress pie chart with details",
        category: "finance",
    },
    {
        slug: "savings-targets",
        title: "Savings Targets",
        description: "Savings targets with progress and investment form",
        category: "finance",
    },
    {
        slug: "sidebar-nav",
        title: "Sidebar Nav",
        description: "Sidebar navigation with menu items",
        category: "general",
    },
    {
        slug: "social-links",
        title: "Social Links",
        description: "Social links form with input groups",
        category: "general",
    },
    {
        slug: "stock-performance",
        title: "Stock Performance",
        description: "Stock performance chart with ticker selection",
        category: "finance",
    },
    {
        slug: "syncing-state",
        title: "Syncing State",
        description: "Syncing state with spinner",
        category: "empty-states",
    },
    {
        slug: "transfer-funds",
        title: "Transfer Funds",
        description: "Transfer funds between accounts",
        category: "finance",
    },
    {
        slug: "upcoming-payments",
        title: "Upcoming Payments",
        description: "Upcoming payments with calendar",
        category: "finance",
    },
]

export const CATEGORY_ORDER: Category[] = [
    "finance",
    "smart-home",
    "music",
    "empty-states",
    "general",
]

export function getExamplesByCategory(category: Category): ExampleMeta[] {
    return EXAMPLES.filter((e) => e.category === category)
}

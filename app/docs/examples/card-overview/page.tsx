import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewer } from "@/components/code-viewer"
import { CardOverview } from "@/app/component-showcase/cards/card-overview"

const code = `import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HugeiconsIcon } from "@hugeicons/react"
import { CreditCardIcon } from "@hugeicons/core-free-icons"

export function CardOverview() {
    return (
        <Card className="w-75">
            <CardHeader>
                <CardTitle className="text-base">Total Balance</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold">$12,450.00</span>
                    <span className="text-sm text-green-500">+2.5%</span>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-muted/50 p-3">
                    <HugeiconsIcon icon={CreditCardIcon} className="size-5 text-muted-foreground" />
                    <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Visa ending in 4242</span>
                        <span className="text-sm font-medium">$8,200.00</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}`

export default function Page() {
    return (
        <DocsPage>
            <DocsTitle>Card Overview</DocsTitle>
            <DocsDescription>
                Overview card with summary metrics
            </DocsDescription>
            <DocsBody>
                <CodeViewer
                    component={<CardOverview />}
                    code={code}
                    maxWidth={"md"}
                />
            </DocsBody>
        </DocsPage>
    )
}

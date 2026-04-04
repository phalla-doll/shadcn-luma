import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewer } from "@/components/code-viewer"
import { IndexInvesting } from "@/app/component-showcase/cards/index-investing"

const code = `import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IconPlaceholder } from "@/components/icon-placeholder"

export function IndexInvesting() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Dollar-Cost Averaging</CardTitle>
                <CardDescription>
                    A strategy for building wealth over time.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CardDescription className="mt-3 text-sm leading-relaxed">
                    <a
                        href="#"
                        className="underline underline-offset-4 hover:text-primary"
                    >
                        Over time
                    </a>
                    , this smooths out the average cost of your investments.
                    When prices drop, your fixed amount buys more shares. When
                    prices rise, you buy fewer. The result is a lower average
                    cost per share compared to lump-sum investing during
                    volatile periods.
                </CardDescription>
            </CardContent>
        </Card>
    )
}
`

export default function Page() {
    return (
        <DocsPage>
            <DocsTitle>Index Investing</DocsTitle>
            <DocsDescription>
                Dollar-cost averaging explanation card
            </DocsDescription>
            <DocsBody>
                <CodeViewer
                    component={<IndexInvesting />}
                    code={code}
                    maxWidth="sm"
                />
            </DocsBody>
        </DocsPage>
    )
}

import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewer } from "@/components/code-viewer"
import { EmptyConnectBank } from "@/app/component-showcase/cards/empty-connect-bank"

const code = `import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Empty,
    EmptyContent,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
} from "@/components/ui/empty"
import { IconPlaceholder } from "@/components/icon-placeholder"

export function EmptyConnectBank() {
    return (
        <Card>
            <CardContent>
                <Empty className="p-4">
                    <EmptyMedia variant="icon">
                        <IconPlaceholder
                            lucide="CreditCardIcon"
                            tabler="IconCreditCard"
                            hugeicons="CreditCardIcon"
                            phosphor="CreditCardIcon"
                            remixicon="RiBankCardLine"
                        />
                    </EmptyMedia>
                    <EmptyHeader>
                        <EmptyTitle>Connect Bank</EmptyTitle>
                        <EmptyDescription>
                            Link your payout method to receive monthly royalty
                            distributions automatically.
                        </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button>Set Up Payouts</Button>
                    </EmptyContent>
                </Empty>
            </CardContent>
        </Card>
    )
}
`

export default function Page() {
    return (
        <DocsPage>
            <DocsTitle>Empty Connect Bank</DocsTitle>
            <DocsDescription>
                Empty state for connecting a bank account
            </DocsDescription>
            <DocsBody>
                <CodeViewer
                    component={<EmptyConnectBank />}
                    code={code}
                    maxWidth="sm"
                />
            </DocsBody>
        </DocsPage>
    )
}

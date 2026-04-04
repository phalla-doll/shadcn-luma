import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewer } from "@/components/code-viewer"
import { SyncingState } from "@/app/component-showcase/cards/syncing-state"

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
import { Spinner } from "@/components/ui/spinner"

export function SyncingState() {
    return (
        <Card>
            <CardContent className="p-0">
                <Empty className="p-4">
                    <EmptyHeader>
                        <EmptyMedia variant="icon">
                            <Spinner />
                        </EmptyMedia>
                        <EmptyTitle>Syncing your accounts</EmptyTitle>
                        <EmptyDescription>
                            We&apos;re pulling in your latest transactions. This
                            usually takes a few seconds.
                        </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button variant="outline">Cancel</Button>
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
            <DocsTitle>Syncing State</DocsTitle>
            <DocsDescription>Syncing state with spinner</DocsDescription>
            <DocsBody>
                <CodeViewer
                    component={<SyncingState />}
                    code={code}
                    maxWidth="sm"
                />
            </DocsBody>
        </DocsPage>
    )
}

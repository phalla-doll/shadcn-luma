import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewer } from "@/components/code-viewer"
import { EmptyDistributeTrack } from "@/app/component-showcase/cards/empty-distribute-track"

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

export function EmptyDistributeTrack() {
    return (
        <Card>
            <CardContent>
                <Empty className="p-4">
                    <EmptyMedia variant="icon">
                        <IconPlaceholder
                            lucide="PlusIcon"
                            tabler="IconPlus"
                            hugeicons="Add01Icon"
                            phosphor="PlusIcon"
                            remixicon="RiAddLine"
                        />
                    </EmptyMedia>
                    <EmptyHeader>
                        <EmptyTitle>Distribute Track</EmptyTitle>
                        <EmptyDescription>
                            Upload your first master to start reaching listeners
                            on Spotify, Apple Music, and more.
                        </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button>Create Release</Button>
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
            <DocsTitle>Empty Distribute Track</DocsTitle>
            <DocsDescription>
                Empty state for distributing a track
            </DocsDescription>
            <DocsBody>
                <CodeViewer
                    component={<EmptyDistributeTrack />}
                    code={code}
                    maxWidth="sm"
                />
            </DocsBody>
        </DocsPage>
    )
}

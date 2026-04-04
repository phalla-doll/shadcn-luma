import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewer } from "@/components/code-viewer"
import { EmptyExploreCatalog } from "@/app/component-showcase/cards/empty-explore-catalog"

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

export function EmptyExploreCatalog() {
    return (
        <Card>
            <CardContent>
                <Empty className="p-4">
                    <EmptyMedia variant="icon">
                        <IconPlaceholder
                            lucide="AudioLinesIcon"
                            tabler="IconPlayerRecordFilled"
                            hugeicons="AudioWave01Icon"
                            phosphor="RecordIcon"
                            remixicon="RiRecordCircleLine"
                        />
                    </EmptyMedia>
                    <EmptyHeader>
                        <EmptyTitle>Explore Catalog</EmptyTitle>
                        <EmptyDescription>
                            Check your ISRC codes, metadata, and visual assets
                            before going live.
                        </EmptyDescription>
                    </EmptyHeader>
                    <EmptyContent>
                        <Button>View Catalog</Button>
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
            <DocsTitle>Empty Explore Catalog</DocsTitle>
            <DocsDescription>Empty state for exploring catalog</DocsDescription>
            <DocsBody>
                <CodeViewer
                    component={<EmptyExploreCatalog />}
                    code={code}
                    maxWidth="sm"
                />
            </DocsBody>
        </DocsPage>
    )
}

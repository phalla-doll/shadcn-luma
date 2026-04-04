"use client"

import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewerWithTabs } from "@/components/code-viewer"
import { MapSection } from "@/components/map-section"
import { MAP_DOCS_CODE_TABS } from "@/lib/docs/map-code-snippets"

export default function Page() {
    return (
        <DocsPage>
            <DocsTitle>Map</DocsTitle>
            <DocsDescription>
                Interactive property map with markers and location search
            </DocsDescription>
            <DocsBody>
                <CodeViewerWithTabs
                    component={
                        <MapSection className="relative h-[500px] w-full overflow-hidden rounded-md" />
                    }
                    tabs={MAP_DOCS_CODE_TABS}
                    defaultTab="map-section"
                    maxWidth={false}
                />
            </DocsBody>
        </DocsPage>
    )
}

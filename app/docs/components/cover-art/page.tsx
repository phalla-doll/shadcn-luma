import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewer } from "@/components/code-viewer"
import { CoverArt } from "@/app/component-showcase/cards/cover-art"

const code = `import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
} from "@/components/ui/card"
import { Item } from "@/components/ui/item"
import { Label } from "@/components/ui/label"
import { IconPlaceholder } from "@/components/icon-placeholder"

export function CoverArt() {
    return (
        <Card>
            <CardContent className="flex flex-col gap-3">
                <Label
                    htmlFor="cover-art"
                    className="text-center text-xs font-normal tracking-wider text-muted-foreground uppercase"
                >
                    Cover Art
                </Label>
                <Item className="aspect-square" variant="outline">
                    <label
                        htmlFor="cover-art"
                        className="flex size-full cursor-pointer items-center justify-center"
                    >
                        <IconPlaceholder
                            lucide="ImageIcon"
                            tabler="IconPhoto"
                            hugeicons="Image01Icon"
                            phosphor="ImageIcon"
                            remixicon="RiImageLine"
                            className="size-10 text-muted-foreground/50"
                        />
                    </label>
                </Item>
                <input
                    id="cover-art"
                    type="file"
                    accept="image/jpeg,image/png"
                    className="sr-only"
                />
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button variant="secondary" className="w-full" asChild>
                    <label htmlFor="cover-art" className="cursor-pointer">
                        Upload Artwork
                    </label>
                </Button>
                <CardDescription className="text-center text-xs">
                    Minimum 3000 × 3000px
                    <br />
                    JPEG or PNG only
                </CardDescription>
            </CardFooter>
        </Card>
    )
}
`

export default function Page() {
    return (
        <DocsPage>
            <DocsTitle>Cover Art</DocsTitle>
            <DocsDescription>
                Cover art upload component with file input
            </DocsDescription>
            <DocsBody>
                <CodeViewer
                    component={<CoverArt />}
                    code={code}
                    maxWidth="sm"
                />
            </DocsBody>
        </DocsPage>
    )
}

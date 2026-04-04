import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewer } from "@/components/code-viewer"
import { FrontDoor } from "@/app/component-showcase/cards/front-door"

const code = `import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IconPlaceholder } from "@/components/icon-placeholder"

export function FrontDoor() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Front Door</CardTitle>
                <CardDescription>Smart Lock Pro</CardDescription>
                <CardAction>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        Locked
                        <IconPlaceholder
                            lucide="LockIcon"
                            tabler="IconLock"
                            hugeicons="SquareLock02Icon"
                            phosphor="LockKeyIcon"
                            remixicon="RiLockLine"
                            className="size-4"
                        />
                    </div>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-muted bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--border)_10px,var(--border)_11px)]">
                    <Badge
                        variant="destructive"
                        className="absolute top-2 right-2"
                    >
                        Live
                    </Badge>
                </div>
            </CardContent>
        </Card>
    )
}
`

export default function Page() {
    return (
        <DocsPage>
            <DocsTitle>Front Door</DocsTitle>
            <DocsDescription>
                Smart lock front door card with live status
            </DocsDescription>
            <DocsBody>
                <CodeViewer
                    component={<FrontDoor />}
                    code={code}
                    maxWidth="sm"
                />
            </DocsBody>
        </DocsPage>
    )
}

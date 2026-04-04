import {
    DocsPage,
    DocsBody,
    DocsTitle,
    DocsDescription,
} from "fumadocs-ui/layouts/docs/page"
import { CodeViewer } from "@/components/code-viewer"
import { QrConnect } from "@/app/component-showcase/cards/qr-connect"

const code = `"use client"

import QRCode from "react-qr-code"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function QrConnect() {
    return (
        <Card>
            <CardContent className="flex justify-center pt-6">
                <div className="rounded-xl border bg-white p-4">
                    <QRCode
                        value="https://ledger.app/connect/jd-4829"
                        size={160}
                        level="M"
                    />
                </div>
            </CardContent>
            <CardHeader className="text-center">
                <CardTitle>Scan to connect your mobile device</CardTitle>
                <CardDescription>
                    Open the Ledger mobile app and scan this code to link your
                    device.
                </CardDescription>
            </CardHeader>
            <CardFooter>
                <Button variant="secondary" className="w-full">
                    Got it
                </Button>
            </CardFooter>
        </Card>
    )
}
`

export default function Page() {
    return (
        <DocsPage>
            <DocsTitle>QR Connect</DocsTitle>
            <DocsDescription>
                QR code for mobile device connection
            </DocsDescription>
            <DocsBody>
                <CodeViewer
                    component={<QrConnect />}
                    code={code}
                    maxWidth="sm"
                />
            </DocsBody>
        </DocsPage>
    )
}

import { Geist, Geist_Mono } from "next/font/google"

import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
})

export const metadata: Metadata = {
    title: {
        default: "UI",
        template: "UI — %s",
    },
    description:
        "Build interfaces people actually want to use. Production-grade components built with shadcn/ui, Radix, and Tailwind CSS v4.",
    icons: {
        icon: "/logo.svg",
        apple: "/logo-512.svg",
    },
    openGraph: {
        title: "UI",
        description:
            "Build interfaces people actually want to use. Production-grade components built with shadcn/ui, Radix, and Tailwind CSS v4.",
        url: "https://ui.dev",
        siteName: "UI",
        images: [
            {
                url: "/ui-mantha-og-main.png",
                width: 1200,
                height: 630,
                alt: "UI — Build interfaces people actually want to use",
            },
            {
                url: "/logo-512.svg",
                width: 512,
                height: 512,
                alt: "UI logo",
            },
        ],
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary",
        title: "UI",
        description:
            "Build interfaces people actually want to use. Production-grade components built with shadcn/ui, Radix, and Tailwind CSS v4.",
        images: ["/logo-512.svg"],
    },
    metadataBase: new URL("https://ui.dev"),
}

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#ffffff" },
        { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    ],
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                "antialiased",
                fontMono.variable,
                "font-sans",
                geist.variable
            )}
        >
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    )
}

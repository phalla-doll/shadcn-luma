import { Geist, Geist_Mono } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"

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
        default: "UI — Curated UI components",
        template: "UI — %s",
    },
    description:
        "Discover curated UI components that feel good to use. Built with shadcn/ui, Radix, and Tailwind CSS v4.",
    icons: {
        icon: "/logo.svg",
        apple: "/logo-512.svg",
    },
    openGraph: {
        title: "UI — Curated UI components",
        description:
            "Discover curated UI components that feel good to use. Built with shadcn/ui, Radix, and Tailwind CSS v4.",
        url: "https://ui.manthaa.dev/",
        siteName: "UI",
        type: "website",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "UI",
        description:
            "Discover curated UI components that feel good to use. Built with shadcn/ui, Radix, and Tailwind CSS v4.",
    },
    metadataBase: new URL("https://ui.manthaa.dev/"),
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
                "scroll-smooth antialiased",
                fontMono.variable,
                "font-sans",
                geist.variable
            )}
        >
            <body>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
            {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
                <GoogleAnalytics
                    gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
                />
            )}
        </html>
    )
}

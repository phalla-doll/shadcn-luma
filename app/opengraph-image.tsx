import { ImageResponse } from "next/og"

export const alt = "UI — Curated UI components"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: 80,
                background:
                    "linear-gradient(135deg, #fafafa 0%, #f4f4f5 40%, #e4e4e7 100%)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    maxWidth: 900,
                }}
            >
                <div
                    style={{
                        fontSize: 72,
                        fontWeight: 600,
                        letterSpacing: "-0.03em",
                        color: "#18181b",
                        lineHeight: 1.1,
                        fontFamily: "ui-sans-serif, system-ui, sans-serif",
                    }}
                >
                    Curated UI components
                </div>
                <div
                    style={{
                        fontSize: 28,
                        fontWeight: 400,
                        color: "#52525b",
                        lineHeight: 1.4,
                        fontFamily: "ui-sans-serif, system-ui, sans-serif",
                    }}
                >
                    Built with shadcn/ui, Radix, and Tailwind CSS v4.
                </div>
            </div>
        </div>,
        { ...size }
    )
}

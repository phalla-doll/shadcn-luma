import * as React from "react"
import { cn } from "@/lib/utils"

function Logo({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <svg
            data-slot="logo"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="UI logo"
            className={cn("size-6", className)}
            {...props}
        >
            <title>UI logo</title>
            <path
                d="M 31 16 C 31 6.45 30.24 5.02 28.61 3.39 C 25.84 0.62 19.63 1 16 1 C 12.37 1 6.16 0.62 3.39 3.39 C 1.76 5.02 1 6.45 1 16 C 1 25.55 1.76 26.98 3.39 28.61 C 6.16 31.38 12.37 31 16 31 C 19.63 31 25.84 31.38 28.61 28.61 C 30.24 26.98 31 25.55 31 16 Z"
                fill="currentColor"
                className="text-primary"
            />
            <text
                x="16"
                y="16"
                textAnchor="middle"
                dominantBaseline="central"
                fontFamily="var(--font-sans)"
                fontSize="14"
                fontWeight="700"
                fill="currentColor"
                className="text-primary-foreground"
            >
                UI
            </text>
        </svg>
    )
}

export { Logo }

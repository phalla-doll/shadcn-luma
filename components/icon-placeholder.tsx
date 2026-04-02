import * as React from "react"

function IconPlaceholder({
    className,
}: {
    lucide?: string
    tabler?: string
    hugeicons?: string
    phosphor?: string
    remixicon?: string
    className?: string
}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            data-slot="icon-placeholder"
        >
            <title>Icon</title>
            <circle cx="12" cy="12" r="10" />
        </svg>
    )
}

export { IconPlaceholder }

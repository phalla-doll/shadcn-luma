import Link from "next/link"
import { DocsPage, DocsBody } from "fumadocs-ui/layouts/docs/page"
import {
    CATEGORIES,
    CATEGORY_ORDER,
    EXAMPLES,
    getExamplesByCategory,
} from "@/lib/examples-registry"

export default function ExamplesPage() {
    return (
        <DocsPage>
            <DocsBody>
                <h1>Examples</h1>
                <p className="text-muted-foreground">
                    Browse {EXAMPLES.length} component examples organized by
                    category. Use the sidebar to navigate.
                </p>
                <div className="mt-8 flex flex-col gap-12">
                    {CATEGORY_ORDER.map((category) => {
                        const examples = getExamplesByCategory(category)
                        if (examples.length === 0) return null
                        return (
                            <section key={category}>
                                <h2 className="mb-4 text-lg font-semibold tracking-tight">
                                    {CATEGORIES[category]}
                                </h2>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                                    {examples.map((example) => (
                                        <Link
                                            key={example.slug}
                                            href={`/docs/examples/${example.slug}`}
                                            className="rounded-lg border p-4 no-underline transition-colors hover:border-foreground/20 hover:bg-muted/50"
                                        >
                                            <span className="text-sm font-medium">
                                                {example.title}
                                            </span>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                {example.description}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )
                    })}
                </div>
            </DocsBody>
        </DocsPage>
    )
}

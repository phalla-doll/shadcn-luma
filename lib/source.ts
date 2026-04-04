import { docs } from "../.source/server"
import { loader } from "fumadocs-core/source"
import type { Item, Root, Separator } from "fumadocs-core/page-tree"
import {
    CATEGORY_ORDER,
    CATEGORIES,
    getExamplesByCategory,
} from "./examples-registry"

export const source = loader({
    baseUrl: "/docs",
    source: docs.toFumadocsSource(),
})

function buildComponentNodes(): (Separator | Item)[] {
    return CATEGORY_ORDER.flatMap((category): (Separator | Item)[] => [
        { type: "separator", name: CATEGORIES[category] },
        ...getExamplesByCategory(category)
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(
                (example): Item => ({
                    type: "page",
                    name: example.title,
                    url: `/docs/components/${example.slug}`,
                })
            ),
    ])
}

export function getPageTree(): Root {
    const tree = source.getPageTree()
    const componentNodes = buildComponentNodes()

    const componentsPageIndex = tree.children.findIndex(
        (node) =>
            node.type === "page" &&
            "url" in node &&
            node.url === "/docs/components"
    )

    if (componentsPageIndex === -1) return tree

    const children = [
        ...tree.children.slice(0, componentsPageIndex),
        {
            type: "page",
            name: "Components",
            url: "/docs/components",
        } satisfies Item,
        ...componentNodes,
        ...tree.children.slice(componentsPageIndex + 1),
    ]

    return { ...tree, children }
}

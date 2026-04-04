import { docs } from "../.source/server"
import { loader } from "fumadocs-core/source"
import type { Folder, Item, Root } from "fumadocs-core/page-tree"
import { EXAMPLES } from "./examples-registry"

export const source = loader({
    baseUrl: "/docs",
    source: docs.toFumadocsSource(),
})

export function getPageTree(): Root {
    const tree = source.getPageTree()
    const children = tree.children.map((node) => {
        if (
            node.type === "page" &&
            "url" in node &&
            node.url === "/docs/examples"
        ) {
            return {
                type: "folder" as const,
                name: "Examples",
                defaultOpen: true,
                index: {
                    type: "page" as const,
                    name: "Overview",
                    url: "/docs/examples",
                },
                children: [
                    ...[...EXAMPLES]
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map(
                            (example): Item => ({
                                type: "page",
                                name: example.title,
                                url: `/docs/examples/${example.slug}`,
                            })
                        ),
                ],
            } satisfies Folder
        }
        return node
    })
    return { ...tree, children }
}

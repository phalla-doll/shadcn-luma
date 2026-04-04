import { readFile } from "fs/promises"
import path from "path"

function stripMdxFrontmatter(source: string) {
    const match = source.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/)
    if (match) {
        return source.slice(match[0].length)
    }
    return source
}

export async function GET() {
    const filePath = path.join(
        process.cwd(),
        "content/docs/composition.mdx",
    )
    const raw = await readFile(filePath, "utf8")
    const body = stripMdxFrontmatter(raw)

    return new Response(body, {
        headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Content-Disposition": 'attachment; filename="composition.md"',
        },
    })
}

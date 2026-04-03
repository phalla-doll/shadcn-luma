// @ts-nocheck
import * as __fd_glob_10 from "../content/docs/components/input.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/components/dialog.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/components/card.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/components/button.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/components/badge.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/components/alert-dialog.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/theming.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/installation.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/index.mdx?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/components/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "components/meta.json": __fd_glob_1, }, {"index.mdx": __fd_glob_2, "installation.mdx": __fd_glob_3, "theming.mdx": __fd_glob_4, "components/alert-dialog.mdx": __fd_glob_5, "components/badge.mdx": __fd_glob_6, "components/button.mdx": __fd_glob_7, "components/card.mdx": __fd_glob_8, "components/dialog.mdx": __fd_glob_9, "components/input.mdx": __fd_glob_10, });
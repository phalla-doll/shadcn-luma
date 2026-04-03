// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "installation.mdx": () => import("../content/docs/installation.mdx?collection=docs"), "theming.mdx": () => import("../content/docs/theming.mdx?collection=docs"), "components/alert-dialog.mdx": () => import("../content/docs/components/alert-dialog.mdx?collection=docs"), "components/badge.mdx": () => import("../content/docs/components/badge.mdx?collection=docs"), "components/button.mdx": () => import("../content/docs/components/button.mdx?collection=docs"), "components/card.mdx": () => import("../content/docs/components/card.mdx?collection=docs"), "components/dialog.mdx": () => import("../content/docs/components/dialog.mdx?collection=docs"), "components/input.mdx": () => import("../content/docs/components/input.mdx?collection=docs"), }),
};
export default browserCollections;
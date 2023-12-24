import { unified } from "unified";
// import remarkParse from "remark-parse";
// import rehypeRaw from "rehype-raw";
import rehypeParse from "rehype-parse";
import rehypeSlug from "rehype-slug";
import rehypeToc from "@jsdevtools/rehype-toc";
import rehypeStringify from "rehype-stringify";

export async function generateToc(markdown: string) {
  const toc: any[] = [];

  const processor = unified()
    .use(rehypeParse)
    .use(rehypeSlug)
    .use(rehypeToc, {
      headings: ["h1", "h2", "h3"],
    })
    .use(rehypeStringify);

  const result = processor?.processSync(markdown);

  // result.data.toc.forEach((node: any) => {
  //   toc.push(node);
  // });

  return toc;
}

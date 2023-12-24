import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../types/post";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content");

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName, `/index.md`);
    const id = fileName;
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPost: Post = {
      id,
      emoji: matterResult.data.emoji,
      title: matterResult.data.title,
      date: matterResult.data.date,
      categories: matterResult.data.categories,
      contentHtml: matterResult.content,
    };

    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `/${id}`, `/index.md`);
  console.log(fullPath);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  console.log(processedContent);

  const blogPostWithHTML: Post & { contentHtml: string } = {
    id,
    emoji: matterResult.data.emoji,
    title: matterResult.data.title,
    date: matterResult.data.date,
    categories: matterResult.data.categories,
    contentHtml,
  };

  return blogPostWithHTML;
}

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../types/post";

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
    };

    return blogPost;
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

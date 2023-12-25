// 파일 경로: utils/posts.js

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "../types/post";

const postsDirectory = path.join(process.cwd(), "public");
const postsPerPage = 5; // 페이지당 표시할 포스트 수

export function getSortedPostsData(page = 1) {
  const fileNames = fs.readdirSync(postsDirectory);
  const filteredFileNames = fileNames.filter(
    (fileName) => !fileName.endsWith(".png")
  );

  const allPostsData = filteredFileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName, `/index.md`);
    const id = fileName;
    const fileContents = fs.readFileSync(fullPath, "utf-8");

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

  const totalPosts = allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  const totalPages = Math.ceil(totalPosts.length / postsPerPage);

  // 현재 페이지에 해당하는 포스트들만 반환
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = totalPosts.slice(startIndex, endIndex);

  return {
    currentPosts,
  };
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `/${id}`, `/index.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const blogPostWithHTML: Post & { contentHtml: string } = {
    id,
    emoji: matterResult.data.emoji,
    title: matterResult.data.title,
    date: matterResult.data.date,
    categories: matterResult.data.categories,
    contentHtml: matterResult.content,
  };

  return blogPostWithHTML;
}

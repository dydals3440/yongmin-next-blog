"use client";

import { Post } from "@/app/types/post";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ColumnPost = {
  post: Post;
};

const ColumnPost: React.FC<ColumnPost> = ({ post }) => {
  const router = useRouter();
  const { categories, title, date, emoji, id, contentHtml } = post;

  return (
    <div
      onClick={() => router.push(`/posts/${post.id}`)}
      className="flex flex-col justify-center border-2 rounded-xl p-4 w-3/4 h-[130px] hover:bg-neutral-300 cursor-pointer"
    >
      <h1 className="font-bold text-xl">{title}</h1>
      <br />
      <div className="flex flex-row justify-between">
        <div>{date}</div>
        <div className="flex flex-row gap-2">
          <div>{categories}</div>
          <div>{emoji}</div>
        </div>
      </div>
    </div>
  );
};

export default ColumnPost;

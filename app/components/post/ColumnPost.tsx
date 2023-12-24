"use client";

import { Post } from "@/app/types/post";
import { useRouter } from "next/navigation";

type ColumnPost = {
  post: Post;
};

const ColumnPost: React.FC<ColumnPost> = ({ post }) => {
  const router = useRouter();
  const { categories, title, date, emoji, id } = post;

  return (
    <div
      onClick={() => router.push(`/posts/${post.id}`)}
      className="border-2 rounded-xl p-4 w-3/4"
    >
      {title}
    </div>
  );
};

export default ColumnPost;

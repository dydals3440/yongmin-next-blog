import Link from "next/link";

import { Post } from "../types/post";

type AdjacentPostCardTypes = {
  post: Post;
  text: string;
};

const AdjacentPostCard: React.FC<AdjacentPostCardTypes> = ({ post, text }) => {
  return (
    <div className="bg-neutral-300 rounded-lg p-4 w-[300px] hover:scale-90">
      {post && (
        <Link href={`/posts/${post.id}`}>
          <h3 className="font-bold text-neutral-500">{text}</h3>
          <h3 className="font-bold text-sm">{post.title}</h3>
        </Link>
      )}
    </div>
  );
};

export default AdjacentPostCard;

import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { useRouter } from "next/router";
import { getSortedPostsData } from "@/app/libs/posts";
import ColumnPost from "../components/post/ColumnPost";

const PostPage = () => {
  const posts = getSortedPostsData();

  return (
    <Container>
      <Heading title={"Posts"} center subtitle={`${posts.length} posts`} />
      <hr />
      <div className="mt-4 flex flex-col items-center gap-2">
        {posts.map((post) => (
          <ColumnPost post={post} key={post.id} />
        ))}
      </div>
    </Container>
  );
};

export default PostPage;

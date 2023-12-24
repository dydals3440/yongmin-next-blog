import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { useRouter } from "next/router";
import { getSortedPostsData } from "../libs/posts";

const PostPage = () => {
  const post = getSortedPostsData();
  console.log(post);
  return (
    <Container>
      <Heading title={"Posts"} center subtitle={"100 posts"} />
      <hr />
    </Container>
  );
};

export default PostPage;

import React, { useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { getSortedPostsData } from "@/app/libs/posts";
import FilterablePosts from "./FilterablePosts";

const PostPage = async () => {
  const posts = await getSortedPostsData();
  const categories = [...new Set(posts.map((post) => post.categories))];

  return (
    <Container>
      <Heading title={"Posts"} center subtitle={`${posts.length} posts`} />
      <hr />
      <FilterablePosts posts={posts} categories={categories} />
    </Container>
  );
};

export default PostPage;

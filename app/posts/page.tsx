import Container from "../components/Container";
import Heading from "../components/Heading";
import { Post } from "../types/post";
import FilterablePosts from "./FilterablePosts";

import { getSortedPostsData } from "@/app/libs/posts";

const PostPage = async () => {
  const data = await getSortedPostsData();
  const posts: Post[] = data.currentPosts;

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

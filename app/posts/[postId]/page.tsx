import { getPostData, getSortedPostsData } from "@/app/libs/posts";

import MarkdownViewer from "@/app/components/markdownViewer/MarkdownViewer";
import Container from "../../components/Container";
import Comment from "@/app/components/utterances/Comment";
import PostHeader from "@/app/components/post/PostHeader";
import AdjacentPostCard from "../AdjacentPostCard";

type TParams = {
  postId: string;
};

const PostDetailPage = async ({ params }: { params: TParams }) => {
  const { id, emoji, title, date, contentHtml } = await getPostData(
    params.postId
  );

  const { currentPosts } = getSortedPostsData();

  const currentIndex = currentPosts.findIndex((post) => post.id === id);

  const nextPost = currentPosts[currentIndex - 1] || null;
  const previousPost = currentPosts[currentIndex + 1] || null;

  return (
    <Container>
      <PostHeader title={title} subtitle={date} emoji={emoji} id={id} center />
      <article>
        <MarkdownViewer content={contentHtml} />
      </article>
      <br />
      <Comment />

      <section className="flex justify-center gap-10">
        {previousPost && (
          <AdjacentPostCard post={previousPost} text="이전 포스트" />
        )}
        {nextPost && <AdjacentPostCard post={nextPost} text="다음 포스트" />}
      </section>
    </Container>
  );
};

export default PostDetailPage;

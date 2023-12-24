import MarkdownViewer from "@/app/components/markdownViewer/MarkdownViewer";
import Container from "../../components/Container";
import { getPostData } from "@/app/libs/posts";
import Comment from "@/app/components/utterances/Comment";
import PostHeader from "@/app/components/post/PostHeader";

type TParams = {
  postId?: string;
};

const PostDetailPage = async ({ params }: { params: TParams }) => {
  const { id, emoji, title, date, contentHtml } = await getPostData(
    params.postId
  );

  return (
    <Container>
      <PostHeader title={title} subtitle={date} emoji={emoji} id={id} center />
      <article>
        <MarkdownViewer content={contentHtml} />
      </article>
      <br />
      <Comment />
    </Container>
  );
};

export default PostDetailPage;

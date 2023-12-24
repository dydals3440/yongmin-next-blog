import MarkdownViewer from "@/app/components/markdownViewer/MarkdownViewer";
import Container from "../../components/Container";
import { getPostData } from "@/app/libs/posts";

type TParams = {
  postId?: string;
};

const PostDetailPage = async ({ params }: { params: TParams }) => {
  const { title, date, contentHtml } = await getPostData(params.postId);

  console.log(getPostData(params.postId));

  return (
    <Container>
      <article className="flex flex-col items-center">
        <MarkdownViewer content={contentHtml} />
      </article>
    </Container>
  );
};

export default PostDetailPage;

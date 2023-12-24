import Container from "../../components/Container";
import { getPostData } from "@/app/libs/posts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type TParams = {
  postId?: string;
};

const PostDetailPage = async ({ params }: { params: TParams }) => {
  const { title, date, contentHtml } = await getPostData(params.postId);

  console.log(getPostData(params.postId));

  return (
    <Container>
      <h3>{title}</h3>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{contentHtml}</ReactMarkdown>
    </Container>
  );
};

export default PostDetailPage;

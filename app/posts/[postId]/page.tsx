import fs from "fs";
import path from "path";
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
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Container>
  );
};

export default PostDetailPage;

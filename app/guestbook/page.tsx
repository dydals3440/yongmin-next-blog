import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Comment from "../components/utterances/Comment";

const GuestBookPage = () => {
  return (
    <Container>
      <Heading title="GuestBook" subtitle="방명록 하나만 달아주세요~" center />
      <br />
      <Comment />
    </Container>
  );
};

export default GuestBookPage;

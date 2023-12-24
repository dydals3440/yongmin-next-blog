import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Comment from "../components/utterances/Comment";

const GuestBookPage = () => {
  return (
    <Container>
      <Heading title="GuestBook 페이지" />
      <Comment />
    </Container>
  );
};

export default GuestBookPage;

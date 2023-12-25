"use client";

import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Banner from "../components/banner/Banner";
import TimeLine from "../components/timeline/TimeLine";
import { biography } from "@/constants/timeline";
import { awards } from "@/constants/awards";

const AboutPage = () => {
  return (
    <Container>
      <Banner />
      <br />
      <Heading title="Activity" subtitle="활동 내역" center />
      <h2 className="group-date">2023</h2>
      {biography.map((bio, idx) => (
        <TimeLine
          key={idx}
          date={bio.date}
          title={bio.title}
          description={bio.description}
        />
      ))}
      <br />
      <Heading title="Awards" subtitle="수상 내역" center />
      <h2 className="group-date">2023</h2>
      {awards.map((bio, idx) => (
        <TimeLine
          key={idx}
          date={bio.date}
          title={bio.title}
          description={bio.description}
        />
      ))}
    </Container>
  );
};

export default AboutPage;

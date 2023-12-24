"use client";

import React from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Banner from "../components/banner/Banner";
import TimeLine from "../components/timeline/TimeLine";
import { biography } from "@/timeline/timeline";

const AboutPage = () => {
  return (
    <Container>
      <Banner />
      <br />
      <Heading title="Activity" subtitle="활동 내역" center />
      <div className="flex items-center ">
        <div className="">
          <h2 className="group-date">2023</h2>
        </div>
      </div>
      {biography.map((bio, idx) => (
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

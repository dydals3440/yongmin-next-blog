"use client";

import Image from "next/image";
import ReactRotatingText from "react-rotating-text";
import Container from "../Container";

const Banner = () => {
  return (
    <Container>
      <div className="flex flex-col items-center text-center m-auto whitespace-nowrap md:flex-row">
        <div className="w-1/2 h-full font-bold text-xl">
          <div className="text-[30px]">
            <h1>안녕하세요!</h1>
            <br />
            <strong>
              <ReactRotatingText
                items={["Frontend", "React", "Typescript", "Next"]}
              />
            </strong>{" "}
            <span>를 좋아하는</span>
            <br />
            <br />
            <span>개발자 </span>
            <strong>
              <ReactRotatingText items={["김용민", "매튜"]} />
            </strong>
            <span>입니다.</span>
          </div>
        </div>
        <div className="w-1/2 ">
          <Image
            src={"/profile.png"}
            width={250}
            height={200}
            alt="프로필 이미지"
          />
        </div>
      </div>
    </Container>
  );
};

export default Banner;

"use client";

import ReactRotatingText from "react-rotating-text";

const Banner = () => {
  return (
    <div className="flex">
      <h1>안녕하세요!</h1>
      <br />
      <strong>
        <ReactRotatingText items={["리액트"]} />
      </strong>
    </div>
  );
};

export default Banner;

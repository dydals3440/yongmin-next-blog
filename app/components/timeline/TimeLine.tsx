"use client";

import Container from "../Container";

type BiographyProps = {
  date?: string;
  title?: string;
  description?: string;
};

const TimeLine: React.FC<BiographyProps> = ({ date, title, description }) => {
  return (
    <Container>
      <div className="timeline">
        <div className="relative">
          <div className="dot"></div>
          <div className="pl-10">
            <span className="timeline-date">{date}</span>
            <h3 className="timeline-title">{title}</h3>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TimeLine;

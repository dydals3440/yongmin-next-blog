"use client";

type HeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  id?: string;
  emoji: string;
};

const PostHeader: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  id,
  emoji,
}) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-8xl my-10">{emoji}</div>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">
        포스팅 날짜: {subtitle}
      </div>
      <hr className="my-8 w-[60%] m-auto" />
    </div>
  );
};

export default PostHeader;

"use client";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div
        onClick={() => router.push("/")}
        className="cursor-pointer text-xl font-bold "
      >
        yong-min.com
      </div>
    </div>
  );
};

export default Logo;

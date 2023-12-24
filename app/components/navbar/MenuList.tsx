import Link from "next/link";
import React from "react";

const MenuName = [
  { name: "posts", to: "/posts" },
  { name: "about", to: "/about" },
  { name: "guestbook", to: "/guestbook" },
  { name: "projects", to: "/projects" },
];

const MenuList = () => {
  return (
    <>
      {MenuName.map(({ to, name }, idx) => (
        <Link key={idx} href={`${to}`}>
          <h3 className="mx-2 font-bold hover:scale-110">{name}</h3>
        </Link>
      ))}
    </>
  );
};

export default MenuList;

"use client";
import { useState } from "react";
import { Post } from "../types/post";
import Categories from "./Categories";
import ColumnPost from "../components/post/ColumnPost";

type FilterablePostsProps = {
  posts: Post[];
  categories: string[];
};

const ALL_POSTS = "All Posts";

const FilterablePosts = ({ posts, categories }: FilterablePostsProps) => {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.categories === selected);
  console.log(filtered);
  return (
    <section>
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={(selected) => setSelected(selected)}
      />
      <div className="mt-4 flex flex-col items-center gap-2">
        {filtered.map((post) => (
          <ColumnPost post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
};

export default FilterablePosts;

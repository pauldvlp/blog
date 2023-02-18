import { BlogProvider } from "@/context/BlogContext";
import React from "react";
import BlogCards from "../Blog/BlogCards";
import BlogFilter from "../Blog/BlogFilter";
import BlogHeading from "../Blog/BlogHeading";
import BlogPagination from "../Blog/BlogPagination";

const Blog = () => {
  return (
    <BlogProvider>
      <section id="blog" className="max-w-5xl p-4 sm:p-8 scroll-mt-16 sm:scroll-mt-24 mb-16 grid gap-16">
        <BlogHeading />
        <BlogFilter />
        <BlogCards />
        <BlogPagination />
      </section>
    </BlogProvider>
  );
};

export default Blog;

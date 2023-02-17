import usePosts from "@/hooks/usePosts";
import React, { useEffect, useState } from "react";

const BlogContext = React.createContext()

const BlogProvider = ({ children }) => {
  const { data, query, setQuery } = usePosts()

  const handlePage = ({ type }) => {
    const page = type === "desc" ? --query.page : ++query.page;
    setQuery((prevQuery) => ({ ...prevQuery, page }));
  };

  const handleTags = ({ tag }) => {
    const alreadyAddedTag = query.tags.indexOf(tag) > -1;

    const tags = alreadyAddedTag
      ? query.filter((t) => t !== tag)
      : [...query.tags, tag];

    setQuery((prevQuery) => ({ ...prevQuery, tags }));
  };

  return (
    <BlogContext.Provider value={{ ...data, handlePage, handleTags }}>
      {children}
    </BlogContext.Provider>
  )
};

export default BlogContext
export { BlogProvider };

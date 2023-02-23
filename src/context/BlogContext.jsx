import usePosts from "@/hooks/usePosts";
import React, { createContext } from "react";

const BlogContext = createContext();

const BlogProvider = ({ data: defaultData, children }) => {
  const { data, loading, query, setQuery } = usePosts({ defaultData });

  const handlePage = ({ type }) => {
    setQuery((prevQuery) => {
      const page = type === "desc" ? prevQuery.page - 1 : prevQuery.page + 1;
      return { ...prevQuery, page };
    });
  };

  const handleTags = ({ tag }) => {
    setQuery((prevQuery) => {
      const tags = prevQuery.tags.includes(tag)
        ? prevQuery.tags.filter((t) => t !== tag)
        : [...prevQuery.tags, tag];
      return { ...prevQuery, page: 1, tags };
    });
  };

  const resetTags = () => {
    setQuery((prevQuery) => ({ ...prevQuery, tags: [] }));
  };

  const blogData = { ...data, query, loading, handlePage, handleTags, resetTags };

  return <BlogContext.Provider value={blogData}>{children}</BlogContext.Provider>;
};

export { BlogProvider };
export default BlogContext;

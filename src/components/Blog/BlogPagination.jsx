import BlogContext from "@/context/BlogContext";
import React, { useContext } from "react";
import Button from "../Elements/Button";

const BlogPagination = () => {
  const { pages, page, hasNextPage, hasPrevPage, prevPage, handlePage } =
    useContext(BlogContext);

  return (
    <footer className="flex justify-center gap-4 items-center">
    {
      hasPrevPage && (
        <Button onClick={() => handlePage({ type: 'desc' })}>Anterior</Button>
      )
    }
    {page} de {pages}
    {
      hasNextPage && (
        <Button onClick={() => handlePage({ type: 'asc' })}>Siguiente</Button>
      )
    }
    </footer>
  );
};

export default BlogPagination;

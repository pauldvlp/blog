import BlogContext from "@/context/BlogContext";
import React, { useContext } from "react";
import Button from "../Elements/Button";

const BlogPagination = () => {
  const { pages, page, hasNextPage, hasPrevPage, loading, handlePage } =
    useContext(BlogContext);

  return (
    <footer className="flex justify-center gap-4 items-center">
    {
      hasPrevPage && (
        <Button onClick={() => handlePage({ type: 'desc' })} disabled={loading}>Anterior</Button>
      )
    }
    {pages ? page : pages} de {pages}
    {
      hasNextPage && (
        <Button onClick={() => handlePage({ type: 'asc' })} disabled={loading}>Siguiente</Button>
      )
    }
    </footer>
  );
};

export default BlogPagination;

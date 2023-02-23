import BlogContext from "@/context/BlogContext";
import React, { useContext } from "react";
import Button from "../Elements/Button";
import { useRouter } from 'next/router'

const BlogPagination = () => {
  const router = useRouter()

  const { pages, page, hasNextPage, hasPrevPage, loading, handlePage } =
    useContext(BlogContext);

  const handleClick = (type) => {
    return () => {
      handlePage({ type })
      router.push({ hash: '#blog' })
    }
  }

  return (
    <footer className="flex justify-center gap-4 items-center">
    {
      hasPrevPage && (
        <Button onClick={handleClick('desc')} disabled={loading}>{'<-'} Anterior</Button>
      )
    }
    {pages ? page : pages} de {pages}
    {
      hasNextPage && (
        <Button onClick={handleClick('asc')} disabled={loading}>Siguiente {'->'}</Button>
      )
    }
    </footer>
  );
};

export default BlogPagination;

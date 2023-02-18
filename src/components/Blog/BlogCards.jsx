import BlogContext from "@/context/BlogContext";
import React, { useContext } from "react";
import Card from "../Card/Card";

const BlogCards = () => {
  const { docs, query } = useContext(BlogContext);

  const renderCards = () => {
    if (docs.length === 0) {
      return (
        <span className="font-semibold w-full text-center">
          No hay posts{Boolean(query.tags.length) && ` con las etiquetas: ${query.tags.join(', ')}`}
        </span>
      );
    }

    return docs.map((data) => <Card key={data.slug} data={data} />);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] gap-4 sm:gap-8">
      {renderCards()}
    </div>
  );
};

export default BlogCards;

import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import CardDate from "./CardDate";
import CardResume from "./CardResume";
import CardTagsContainer from "./CardTagsContainer";
import CardTitle from "./CardTitle";

const Card = ({ data }) => {
  return (
    <article>
      <Link className="relative p-4 sm:p-8 rounded grid gap-4 content-start hover:shadow-xl border-t border-t-transparent hover:border-t-slate-200 duration-300 h-full grid-rows-[repeat(3,auto)_1fr] before:content-['Léeme!'] before:absolute before:left-1/2 before:top-0 before:bg-blue-600 before:text-white before:-translate-x-1/2 before:-translate-y-1/2 before:-rotate-2 before:px-4 before:py-2 before:text-xs before:opacity-0 sm:before:hover:opacity-100 before:duration-300 before:rounded-full before:font-semibold" href={`/blog/${data.slug}`}>
        <CardTagsContainer>
          {data.tags.map(tag => <Tag key={tag} tag={tag} />)}
        </CardTagsContainer>
        <CardTitle>{data.title}</CardTitle>
        <CardResume>{data.resume}</CardResume>
        <CardDate>{data.date}</CardDate>
      </Link>
    </article>
  );
};

export default Card;

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
      <Link className="p-4 sm:p-8 rounded grid gap-4 content-start hover:shadow-xl border-t border-t-transparent hover:border-t-slate-200 duration-300 h-full grid-rows-[repeat(3,auto)_1fr]" href={`/blog/${data.slug}`}>
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

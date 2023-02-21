import { getFormattedDate } from "@/lib/date";
import Link from "next/link";
import Tag from "../Elements/Tag";
import CardDate from "./CardDate";
import CardResume from "./CardResume";
import CardTagsContainer from "./CardTagsContainer";
import CardTitle from "./CardTitle";

const Card = ({ data }) => {
  return (
    <article className="relative before:content-['Léeme!'] before:absolute before:left-1/2 before:top-0 before:bg-blue-600 before:text-white before:-translate-x-1/2 before:-translate-y-1/2 before:-rotate-2 before:px-4 before:py-2 before:text-xs before:opacity-0 sm:before:hover:opacity-100 before:duration-300 before:rounded-full before:font-semibold before:z-20 before:shadow-lg before:shadow-blue-300">
      <Link
        className="group/card relative p-4 sm:p-8 rounded grid gap-4 content-start hover:shadow-2xl hover:shadow-blue-100 border border-transparent hover:border-blue-100 duration-300 h-full grid-rows-[repeat(3,auto)_1fr] overflow-hidden z-10"
        href={`/blog/${data.slug}`}
      >
        <CardTagsContainer>
          {data.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </CardTagsContainer>
        <CardTitle>{data.title}</CardTitle>
        <CardResume>{data.resume}</CardResume>
        <CardDate>{getFormattedDate(data.date)}</CardDate>
        <span className={`absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block w-1/4 h-1/4 blur-3xl bg-blue-100 opacity-50 group-hover/card:opacity-60 group-hover/card:w-full group-hover/card:h-full duration-300`}></span>
      </Link>
    </article>
  );
};

export default Card;

import Link from "next/link";
import React from "react";

const HomeLinks = () => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <Link
        href={"/#blog"}
        className="bg-blue-600 text-white px-6 h-12 rounded-full grid place-items-center shadow-xl shadow-blue-100 active:shadow-none active:scale-90 duration-300 text-sm font-semibold border-2 border-transparent"
      >
        Lee Mi Blog
      </Link>
      <Link
        href={"/#contact"}
        className="text-blue-600 bg-white px-6 h-12 rounded-full grid place-items-center shadow-xl shadow-blue-100 active:shadow-none active:scale-90 duration-300 text-sm font-semibold border-2 border-blue-600"
      >
        Contáctame
      </Link>
    </div>
  );
};

export default HomeLinks;

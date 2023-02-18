import React from "react";

const getTagClassname = ({ tag, active = false }) => {
  const normalClassNames = {
    css: "bg-blue-100 text-blue-700",
    javascript: "bg-yellow-100 text-yellow-600",
    html: "bg-orange-100 text-orange-600",
    react: "bg-cyan-100 text-cyan-500",
    design: "bg-indigo-100 text-indigo-700",
    web: "bg-slate-200 text-slate-700",
    node: "bg-lime-100 text-lime-700",
    git: "bg-amber-100 text-amber-700",
    figma: "bg-fuchsia-100 text-fuchsia-500",
    seo: "bg-rose-100 text-rose-600",
  };

  const activeClassNames = {
    css: "bg-blue-500 text-white",
    javascript: "bg-yellow-500 text-black",
    html: "bg-orange-500 text-white",
    react: "bg-cyan-500 text-white",
    design: "bg-indigo-500 text-white",
    web: "bg-slate-500 text-white",
    node: "bg-lime-500 text-black",
    git: "bg-amber-500 text-black",
    figma: "bg-fuchsia-500 text-white",
    seo: "bg-rose-500 text-white",
  };

  return active ? activeClassNames[tag] : normalClassNames[tag];
};

const Tag = ({ tag, active, ...props }) => {
  return (
    <span
      className={`cursor-pointer text-xs font-semibold px-4 py-2 rounded-full ${getTagClassname(
        { tag, active }
      )}`}
      {...props}
    >
      {tag}
    </span>
  );
};

export default Tag;

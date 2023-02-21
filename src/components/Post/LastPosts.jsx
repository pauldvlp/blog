import React from "react";
import usePosts from "@/hooks/usePosts";
import Card from "@/components/Card/Card";
import Loader from "../Elements/Loader";

const LastPosts = ({ current }) => {
  const { data, loading } = usePosts({ limit: 3 });

  const filteredPosts = data.docs
    .filter(({ slug }) => slug !== current)
    .slice(0, 2);

  const postCards = filteredPosts.map((post) => (
    <Card key={post.slug} data={post} />
  ));

  return (
    <section className="my-20 p-4 sm:p-8">
      <h3 className="text-center text-xl sm:text-3xl font-semibold mb-12">
        Pasate por alguno de mis últimos artículos 😊
      </h3>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] gap-4 sm:gap-8">
          {postCards}
        </div>
      )}
    </section>
  );
};

export default LastPosts;
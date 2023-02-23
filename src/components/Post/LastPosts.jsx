import React from "react";
import Card from "@/components/Card/Card";

const LastPosts = ({ posts }) => {

  const postCards = posts.map((post) => (
    <Card key={post.slug} data={post} />
  ));

  return (
    <section className="my-20 p-4 sm:p-8">
      <h3 className="text-center text-xl sm:text-3xl font-semibold mb-12">
        Pasate por alguno de mis últimos artículos 😊
      </h3>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] gap-4 sm:gap-8">
          {postCards}
        </div>
    </section>
  );
};

export default LastPosts;
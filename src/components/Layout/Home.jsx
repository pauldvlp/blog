import Head from "next/head";
import React from "react";
import HomeHeading from "../Home/HomeHeading";
import HomeLinks from "../Home/HomeLinks";
import HomeName from "../Home/HomeName";
import HomeResume from "../Home/HomeResume";

export default function Hero() {
  return (
    <>
      <Head>
        <title>
          Paul Barahona | Desarrollo web Frontend y Backend con Figma y
          JavaScript
        </title>
        <meta
          name="description"
          content="Bienvenidos a mi blog, donde encontrarás contenido sobre desarrollo web Frontend y Backend utilizando herramientas como Figma y lenguajes de programación como JavaScript. Descubre consejos, trucos y tutoriales para mejorar tus habilidades como desarrollador y crear sitios web impresionantes. ¡Únete a la comunidad de Paul Barahona y lleva tus habilidades de desarrollo web al siguiente nivel!"
        />
        <meta name="keywords" content="paul, barahona, blog, javascript, frontend, css, html, figma, desarrollo, web" />
      </Head>
      <section className="min-h-[calc(100vh_-_3rem)] sm:min-h-[calc(100vh_-_5rem)] grid justify-items-center content-center gap-6 p-8 max-w-4xl mx-auto">
        <HomeName />
        <HomeHeading />
        <HomeResume />
        <HomeLinks />
      </section>
    </>
  );
}

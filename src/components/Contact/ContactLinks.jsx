import React from "react";

const links = [
  {
    name: "Whatsapp",
    url: '/wa'
  },
  {
    name: "Instagram",
    url: '/ig'
  },
  {
    name: "Twitter",
    url: '/tt'
  },
  {
    name: "Github",
    url: '/gh'
  },
];

const ContactLinks = () => {
  return (
    <div className="grid border-t py-8 gap-2">
      <span className="text-center">
        Ó puedes contactarme a tráves de mis redes sociales:
      </span>
      <div className='flex justify-center gap-4 flex-wrap'>
        {links.map(({ name, url }) => {
          return (
            <a key={name} className='font-semibold text-blue-500 hover:text-blue-700 border-b border-b-transparent hover:border-blue-700' href={url.toString()} target={"_blank"} rel='noreferrer noopener'>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactLinks;

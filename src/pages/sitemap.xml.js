import path from 'path'
import { getSortedAllPostsData } from "@/lib/posts";

const ROOT = process.env.HOST || 'localhost:3000'

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
     <url>
       <loc>${ROOT}</loc>
     </url>
     ${posts
       .map(({ slug, date }) => {
         return `
       <url>
           <loc>${path.join(ROOT, 'blog', slug)}</loc>
           <lastmod>${new Date(date).toISOString()}</lastmod>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const posts = getSortedAllPostsData()

  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
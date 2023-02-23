import React from 'react'
import path from 'path'
import { getAllPostsSlug, getPostData, getSortedAndPaginatedAllPostsData } from '@/lib/posts'
import HighLight from '@/components/Elements/Highligth'
import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import LastPosts from '@/components/Post/LastPosts'
import { getFormattedDate } from '@/lib/date'

const Post = ({ html, meta, latestPosts }) => {
  const { url, image, title = '', resume = '', tags = [], keywords = [] } = meta
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name='description' content={resume} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={resume} />
        <meta property="og:image" content={image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={resume} />
        <meta property="twitter:image" content={image} />

        <meta name='keywords' content={`paul, barahona, blog, ${[...tags, ...keywords].join
          (', ')}`} />

        <link rel="canonical" href={url} />
      </Head>
      <p className='text-center mt-24 text-xs mb-4'>{getFormattedDate(meta.date)}</p>
      <HighLight html={html} />
      <LastPosts posts={latestPosts} />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const props = getPostData(slug)

  props.meta.url = path.join(process.cwd(), 'blog', slug)
  props.meta.image = path.join(process.cwd(), `/images/posts/${slug}.png`)
  const posts = getSortedAndPaginatedAllPostsData({ limit: 3 })

  props.latestPosts = posts.docs.filter(
    post => post.slug !== slug
  ).slice(0,2)

  return {
    props
  }
}

export async function getStaticPaths() {
  const paths = getAllPostsSlug().map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default Post
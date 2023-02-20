import React from 'react'
import { getAllPostsSlug, getPostData } from '@/lib/posts'
import HighLight from '@/components/Elements/Highligth'
import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import LastPosts from '@/components/Post/LastPosts'

const Post = ({ html, meta }) => {
  return (
    <Layout>
    <Head>
      <title>{meta.title}</title>
      <meta name='description' content={meta.resume} />
    </Head>
      <HighLight html={html} />
      <LastPosts  current={meta.slug}/>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const props = getPostData(slug)

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
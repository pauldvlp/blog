import { getAllPostsSlug, getPostData, getSortedAndPaginatedAllPostsData } from '@/lib/posts'
import HighLight from '@/components/Elements/Highligth'
import Layout from '@/components/Layout/Layout'
import LastPosts from '@/components/Post/LastPosts'
import { getFormattedDate } from '@/lib/date'
import BlogMetaData from '@/components/Blog/BlogMetaData'

const Post = ({ mdxSource, meta, latestPosts }) => {
  return (
    <Layout>
      <BlogMetaData meta={meta} />
      <p className='text-center mt-24 text-xs mb-4'>{getFormattedDate(meta.date)}</p>
      <HighLight mdxSource={mdxSource} />
      <LastPosts posts={latestPosts} />
    </Layout>
  )
}

export async function getStaticProps ({ params }) {
  const { slug } = params

  const props = await getPostData(slug)

  props.meta.url = `${process.env.HOST}/blog/${slug}`
  props.meta.image = `${process.env.HOST}/images/posts/${slug}.png`
  const posts = getSortedAndPaginatedAllPostsData({ limit: 3 })

  props.latestPosts = posts.docs.filter(
    post => post.slug !== slug
  ).slice(0, 2)

  return {
    props
  }
}

export async function getStaticPaths () {
  const paths = getAllPostsSlug().map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false
  }
}

export default Post

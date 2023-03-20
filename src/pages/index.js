import Blog from '@/components/Layout/Blog'
import Home from '@/components/Layout/Home'
import Layout from '@/components/Layout/Layout'
import { BlogProvider } from '@/context/BlogContext'
import { getSortedAndPaginatedAllPostsData } from '@/lib/posts'

export default function Index({ data, imageURL }) {
  return (
    <>
      <Layout>
        <Home imageURL={imageURL} />
        <BlogProvider data={data}>
          <Blog />
        </BlogProvider>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = getSortedAndPaginatedAllPostsData({ limit: 6 })

  const imageURL = process.env.HOST + '/images/og.png'

  return {
    props: { data, imageURL }
  }
}

import Blog from '@/components/Layout/Blog'
import Home from '@/components/Layout/Home'
import Layout from '@/components/Layout/Layout'
import { BlogProvider } from '@/context/BlogContext'
import { getSortedAndPaginatedAllPostsData } from '@/lib/posts'

export default function Index({ data }) {
  return (
    <>
      <Layout>
        <Home />
        <BlogProvider data={data}>
          <Blog />
        </BlogProvider>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = getSortedAndPaginatedAllPostsData({ limit: 6 })

  return {
    props: { data }
  }
}

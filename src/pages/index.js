import Blog from '@/components/Layout/Blog'
import Home from '@/components/Layout/Home'
import Layout from '@/components/Layout/Layout'

export default function Index() {
  return (
    <>
      <Layout>
        <Home />
        <Blog />
      </Layout>
    </>
  )
}

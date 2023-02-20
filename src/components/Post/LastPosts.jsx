import React from 'react'
import usePosts from '@/hooks/usePosts'
import Card from '@/components/Card/Card'

const LastPosts = ({ current }) => {
  const { data } = usePosts({ limit: 3 })
  return (
    <section className='my-20'>
      <h3 className='text-center text-xl sm:text-3xl font-semibold mb-12'>Pasate por alguno de mis ultimos articulos 😊</h3>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(min(350px,100%),1fr))] gap-4 sm:gap-8 p-4 sm:p-8'>
        {
          data.docs
          .filter(({ slug }) => slug !== current)
          .slice(0,2)
          .map(post => <Card key={post.slug} data={post} />)
        }
      </div>
    </section>
  )
}

export default LastPosts
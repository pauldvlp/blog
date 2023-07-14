import React from 'react'
import BlogCards from '../Blog/BlogCards'
import BlogFilter from '../Blog/BlogFilter'
import BlogHeading from '../Blog/BlogHeading'
import BlogPagination from '../Blog/BlogPagination'

const Blog = () => {
  return (
    <section id='blog' className='max-w-5xl p-4 sm:p-8 mb-16 grid gap-16'>
      <BlogHeading />
      <BlogFilter />
      <BlogCards />
      <BlogPagination />
    </section>
  )
}

export default Blog

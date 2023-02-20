import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Showdown from 'showdown'

const postsPathname = path.join(process.cwd(), 'src/posts')

const getTags = string => string.toLowerCase().split(',')

export function getAllPosts() {
  return fs.readdirSync(postsPathname)
}

export function getAllPostsSlug() {
  const posts = getAllPosts()
  return posts.map(post => post.replace('.md', ''))
}

export function getSortedAllPostsData() {
  const posts = getAllPosts()

  const allPostsData = posts.map(
    (post) => {
      const md = fs.readFileSync(path.join(postsPathname, post))
      const { data } = matter(md)
      return { ...data, slug: post.replace('.md', '') }
    }
  )
  
  const sortedPostsData = allPostsData.sort(
    (a, b) => new Intl.Collator().compare(b.date, a.date)
  )

  return sortedPostsData
}

export function getPostData(slug) {
  const md = fs.readFileSync(path.join(postsPathname, `${slug}.md`))
  const { data, content } = matter(md)
  const html = new Showdown.Converter({ tables: true }).makeHtml(content)
  const meta = { ...data, slug }
  return { meta, html }
}

export function getSortedAndPaginatedAllPostsData(page, limit, tags) {
  const posts = getSortedAllPostsData()

  const filteredPosts = posts.filter(
    (post) => {
      if (!tags) return true

      const arrayTags = getTags(tags)

      return arrayTags.every(
        tag => post.tags.includes(tag)
      )
    }
  )

  const startIndex = (page - 1) * limit
  const endIndex = page * limit
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex)

  const totalPages = Math.ceil(filteredPosts.length / limit);
  const hasNextPage = page < totalPages;
  const hasPrevPage = page > 1;
  const nextPage = hasNextPage ? Number(page) + 1 : null;
  const prevPage = hasPrevPage ? Number(page) - 1 : null;

  return {
    docs: paginatedPosts,
    total: filteredPosts.length,
    limit,
    page,
    pages: totalPages,
    nextPage,
    hasNextPage,
    prevPage,
    hasPrevPage,
  };
}
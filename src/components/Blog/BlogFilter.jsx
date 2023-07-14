import BlogContext from '@/context/BlogContext'
import React, { useContext } from 'react'
import Tag from '../Elements/Tag'
import tags from '@/lib/tags.json'

const TagFilter = ({ tag, handleTags, query }) => {
  const active = query.tags.includes(tag)

  const handleClick = () => {
    handleTags({ tag })
  }

  return (
    <Tag tag={tag} active={active} onClick={handleClick} />
  )
}

const BlogFilter = () => {
  const tagsKeys = Object.keys(tags)
  const { resetTags, handleTags, query } = useContext(BlogContext)

  const renderTags = () => {
    return tagsKeys.map((tag) => (
      <TagFilter key={tag} tag={tag} handleTags={handleTags} query={query} />
    ))
  }

  const renderResetButton = () => {
    if (query.tags.length) {
      return (
        <span
          onClick={resetTags}
          className='text-center w-full text-sm font-semibold text-blue-600 underline cursor-pointer mt-2'
        >
          Quitar Filtros
        </span>
      )
    }

    return null
  }

  return (
    <div className='flex justify-center flex-wrap gap-2'>
      <span className='text-center w-full text-sm font-semibold mb-2'>
        Filtrar por etiquetas:
      </span>
      {renderTags()}
      {renderResetButton()}
    </div>
  )
}

export default BlogFilter

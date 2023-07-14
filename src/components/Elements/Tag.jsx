import React from 'react'
import tags from '@/lib/tags.json'

const getTagClassname = ({ tag, active = false }) => {
  const { normal: normalClass, active: activeClass } = tags[tag]

  return active ? activeClass : normalClass
}

const Tag = ({ tag, active, ...props }) => {
  return (
    <span
      className={`cursor-pointer text-xs font-semibold px-4 py-2 rounded-full ${getTagClassname(
        { tag, active }
      )}`}
      {...props}
    >
      {tag}
    </span>
  )
}

export default Tag

import { useEffect } from 'react'
import hljs from 'highlight.js'
import styles from '@/styles/Post.module.css'
import { MDXRemote } from 'next-mdx-remote'
import Link from 'next/link'

const components = { Link }

export default function HighLight ({ mdxSource }) {
  useEffect(() => {
    hljs.highlightAll()
  }, [mdxSource])

  return (
    <main className={styles.container}>
      <MDXRemote {...mdxSource} components={components} />
    </main>
  )
}

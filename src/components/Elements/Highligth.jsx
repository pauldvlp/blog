import { useEffect, useState } from "react"
import hljs from 'highlight.js'
import styles from '@/styles/Post.module.css'

export default function HighLight({ html }) {
  const [highlightedHtml, setHighlightedHtml] = useState(null)

  useEffect(() => {
    const div = document.createElement('div')
    div.innerHTML = html
    div.querySelectorAll('pre code').forEach(hljs.highlightElement)
    setHighlightedHtml(div.innerHTML)
  }, [])
  
  return <main className={styles.container} dangerouslySetInnerHTML={{ __html: highlightedHtml }}></main>
}
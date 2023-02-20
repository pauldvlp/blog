import { useEffect, useState } from "react"
import hljs from 'highlight.js'
import styles from '@/styles/Post.module.css'

export default function HighLight({ html }) {

  useEffect(() => {
    hljs.highlightAll()
  }, [html])
  
  return <main className={styles.container} dangerouslySetInnerHTML={{ __html: html }}></main>
}
import Head from 'next/head'

const BlogMetaData = ({ meta }) => {
  const { url, image, title = '', resume = '', tags = [], keywords = [] } = meta

  const keywordsAsString = `paul, barahona, blog, ${[...tags, ...keywords].join(', ')}`

  return (
    <Head>
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='description' content={resume} />

      <meta property='og:type' content='article' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={resume} />
      <meta property='og:image' content={image} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={resume} />
      <meta property='twitter:image' content={image} />

      <meta name='keywords' content={keywordsAsString} />

      <link rel='canonical' href={url} />
    </Head>
  )
}

export default BlogMetaData

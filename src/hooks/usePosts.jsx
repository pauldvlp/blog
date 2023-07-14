import { useCallback, useEffect, useState } from 'react'

const usePosts = ({
  defaultData = {},
  page = 1,
  limit = 6,
  tags = []
} = {}) => {
  const [data, setData] = useState(defaultData)

  const [query, setQuery] = useState({ page, limit, tags })
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      const endpoint = `/api/posts?page=${query.page}&limit=${
        query.limit
      }&tags=${query.tags.join(',')}`
      const options = { headers: { 'Content-Type': 'application/json' } }

      const response = await fetch(endpoint, options)

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const { data: fetchedData } = await response.json()
      setData(fetchedData)
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }, [query])

  useEffect(() => {
    fetchData()
  }, [query, fetchData])

  return { data, query, loading, setQuery }
}

export default usePosts

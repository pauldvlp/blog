import { useEffect, useState } from "react";

const DEFAULT_QUERY = { page: 1, limit: 10, tags: [] };

const usePosts = () => {
  const [data, setData] = useState({
    docs: [],
    total: 0,
    pages: 0,
    nextPage: null,
    hasNextPage: false,
    prevPage: null,
    hasPrevPage: false,
  });

  const [query, setQuery] = useState(DEFAULT_QUERY);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const endpoint = `/api/posts?page=${query.page}&limit=${query.limit}&tags=${query.tags.join(",")}`;
      const options = { headers: { "Content-Type": "application/json" } };

      const response = await fetch(endpoint, options);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const { data: fetchedData } = await response.json();
      setData(fetchedData);
    } catch (error) {
      alert(error.message || "Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return { data, query, loading, setQuery };
};

export default usePosts;

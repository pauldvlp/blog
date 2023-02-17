import { useEffect, useState } from "react";

const initialData = {
  docs: [],
  total: 0,
  limit: 10,
  page: 1,
  pages: 0,
  nextPage: null,
  hasNextPage: false,
  prevPage: null,
  hasPrevPage: false,
};

const usePosts = () => {
  const [data, setData] = useState(initialData);
  const [query, setQuery] = useState({ page: 1, limit: 1, tags: [] });

  const fetchData = async () => {
    try {
      const endpoint = `/api/posts?page=${query.page}&limit=${
        query.limit
      }&tags=${query.tags.join(",")}`;
      const options = { headers: { "Content-Type": "application/json" } };

      const { data, status } = await fetch(endpoint, options).then((res) =>
        res.json()
      );

      if (status === "FAILED") {
        throw new Error(data.error);
      }

      setData(data);
    } catch (error) {
      alert(error?.message || error.toString());
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return { data, query, setQuery };
};

export default usePosts;

import { useEffect, useState } from "react";

import { getBlogPosts } from "../contentful";

export const useNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await getBlogPosts();
      setNews(response);
      setLoading(false);
    }
    fetchData();
  }, []);

  return [news, isLoading];
};

import { useEffect, useState } from "react";
import { getSingleNews } from "../contentful";

export const useSingleNews = slug => {
  const promise = getSingleNews(slug);

  const [news, setNews] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    promise.then(result => {
      setNews(result[0].fields);
      setLoading(false);
    });
  }, [promise]);
  console.log("Hi", news);

  return [news, isLoading];
};

export default useSingleNews;

import { useEffect, useState } from "react";

import { getBlogPosts } from "../contentful";

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(async () => {
    const promise = await getBlogPosts();
    setPosts(promise);
    setLoading(false);
  }, [posts]);

  return [posts, isLoading];
};

export default { usePosts };

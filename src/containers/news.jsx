import React from "react";
import { Link } from "react-router-dom";
import usePosts from "../helpers/custom-hooks/usePosts";

const News = () => {
  const [posts, isLoading] = usePosts();

  const renderPosts = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    return posts.map(post => (
      <Link to={post.fields.slug}>
        <div>
          <img src={post.fields.featuredImage.fields.fields} />
        </div>
        <h3>{post.fields.title}</h3>
        <p>{post.fields.description}</p>
      </Link>
    ));
  };

  return (
    <div className="posts__container">
      <h2>Articles</h2>

      <div className="posts">{renderPosts()}</div>
    </div>
  );
};

export default News;

import React from "react";
import { Link } from "react-router-dom";
import { useNews } from "../helpers/custom-hooks/index";
import { trimDate } from "../helpers/trimDate";
import "../styles/news.css";

const News = () => {
  const [posts, isLoading] = useNews();

  const renderPosts = () => {
    console.log(posts[0]);

    if (isLoading) return <p>Loading...</p>;

    return posts.map(post => (
      <Link className="posts__post" to={post.fields.slug}>
        <div className="posts__post__img__container">
          <img
            className="posts__post__img__container__img"
            alt={post.fields.title}
            src={post.fields.featuredImage}
          />
        </div>
        <small>{trimDate(post.fields.date)}</small>
        <h3>{post.fields.title}</h3>
        <p>{post.fields.description}</p>
        <p>{post.fields.body}</p>
      </Link>
    ));
  };

  return (
    <div className="posts__container">
      <h2>News</h2>

      <div className="posts">{renderPosts()}</div>
    </div>
  );
};

export default News;

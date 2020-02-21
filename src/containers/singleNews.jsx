import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import MD from "react-markdown";
import { useSingleNews } from "../helpers/custom-hooks/index";
import { trimDate } from "../helpers/trimDate";

import "../styles/singleNews.css";

const SingleNews = () => {
  const { id } = useParams();
  const [news, isLoading] = useSingleNews(id);

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <Fragment>
        <div className="post__intro">
          <h2 className="post__intro__title">{news.title}hh</h2>
          <small className="post__intro__date">{trimDate(news.date)}</small>
          <p className="post__intro__desc">{news.description}</p>

          <img
            className="post__intro__img"
            src={news.featuredImage.fields.file.url}
            alt={news.title}
          />
        </div>

        <div className="post__body">
          <MD source={news.body} />
        </div>
      </Fragment>
    );
  };
  return (
    <div className="news">
      <Link className="post__back" to="/news">
        {"< Back"}
      </Link>

      {renderPost()}
    </div>
  );
};

export default SingleNews;

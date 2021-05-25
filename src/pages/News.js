import React from "react";
import NewsArticle from "./../components/NewsArticle";
import { useRouteMatch } from "react-router-dom";
import { articles } from "./../content/news-content";

const News = () => {
  let { url } = useRouteMatch();

  const articlesMapped = articles.map((article) => {
    const { image, date, title, path } = article;
    return (
      <NewsArticle
        key={title}
        image={image}
        date={date}
        title={title}
        path={`${url}/${path}`}
      />
    );
  });
  return (
    <div className="news-container full-width">
      <div className="text-on-page text-on-page--bgc-grey">
        <div className="text-on-page__wrapper">
          <p className="text-on-page__subheading">Sprawy bieżące</p>
          <p className="text-on-page__heading">Aktualnosci</p>
        </div>
      </div>
      <div className="article-container">{articlesMapped}</div>
    </div>
  );
};

export default News;

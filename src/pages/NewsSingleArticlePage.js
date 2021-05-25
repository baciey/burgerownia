import React from "react";
import { useParams } from "react-router-dom";
import { articles } from "./../content/news-content";

const NewsSingleArticlePage = () => {
  let { articleId } = useParams();

  const article = articles.find((article) => article.path === articleId);
  const { title, image, desc } = article;

  return (
    <div className="article-page-container">
      <h1 className="title">{title}</h1>
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default NewsSingleArticlePage;

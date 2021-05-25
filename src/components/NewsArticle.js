import React from "react";
import FancyButton from "./FancyButton";
import { Link } from "react-router-dom";

const NewsArticle = (props) => {
  const { image, date, title, path } = props;
  return (
    <div className="article">
      <div className="img-container">
        <Link to={path}>
          <img src={image} alt="" />
        </Link>
      </div>
      <div className="date">{date}</div>
      <div className="title">{title}</div>
      <FancyButton content={"Więcej"} path={path} />
    </div>
  );
};

export default NewsArticle;

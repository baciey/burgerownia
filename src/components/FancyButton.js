import React from "react";
import { Link } from "react-router-dom";

const FancyButton = (props) => {
  return (
    <button className="fancy-button">
      <Link to={props.path}>{props.content}</Link>
    </button>
  );
};

export default FancyButton;

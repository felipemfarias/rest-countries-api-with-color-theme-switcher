import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Button = (props) => {
  return (
    <div className="button">
      <Link to={props.url}>{props.label}</Link>
    </div>
  );
};

export default Button;

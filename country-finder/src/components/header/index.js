import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="title">Where in the World?</h1>
        <div className="dark-mode-toggle">
          <FontAwesomeIcon icon={faMoon} /> Dark Mode
        </div>
      </div>
    </div>
  );
};

export default Header;

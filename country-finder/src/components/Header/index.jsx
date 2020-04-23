import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Header = ({ HandleClick, isDarkMode }) => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="title">Where in the World?</h1>
        <div onClick={HandleClick} className="dark-mode-toggle">
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />{" "}
          {isDarkMode ? "Light theme" : "Dark theme"}
        </div>
      </div>
    </div>
  );
};

export default Header;

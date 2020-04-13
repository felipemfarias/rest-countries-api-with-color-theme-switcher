import React from "react";
import "./style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <h1 className="title">Where in the World?</h1>
        <div className="dark-mode-toggle">Dark Mode</div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";

import logo from "./logo.svg";
import app from "../../../package.json";

import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="header-info">
          <span>App: {app.name}</span>
          <span>Version: {app.version}</span>
          <span>Author: {app.author}</span>
        </div>
        <img src={logo} className="logo" alt="logo" />
      </header>
    );
  }
}

Header.displayName = "Components/Header";

Header.defaultProps = {
  app: {}
};

export default Header;

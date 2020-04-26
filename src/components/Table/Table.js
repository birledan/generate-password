import React from "react";

import logo from "./logo.svg";
import "./table.css";

class Table extends React.Component {
  render() {
    const { passwordExpiration, generatedPassword, loading, userId, error } = this.props;
    const loadingSpinner = (
      <img src={logo} className="loading-logo" alt="logo" />
    );

    if (!generatedPassword || error) return null;

    return (
      <div className="table">
        <div className="column psw">
          <label className="column-title">
            Generated password for ID: {userId}
          </label>
          <label className="blue">
            {loading ? loadingSpinner : generatedPassword}
          </label>
        </div>
        <div className="column exp">
          <label className="column-title">This password will expire in:</label>
          <label className="blue">
            {loading ? loadingSpinner : passwordExpiration + " sec"}
          </label>
        </div>
      </div>
    );
  }
}

Table.displayName = "Components/Table";

Table.defaultProps = {
  generatedPassword: null,
  passwordExpiration: 30,
  loading: false, 
  userId: null, 
  error: null
};

export default Table;

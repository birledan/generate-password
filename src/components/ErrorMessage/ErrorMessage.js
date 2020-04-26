import React from "react";

import "./errorMesage.css";

class ErrorMessage extends React.Component {
  render() {
    const { error } = this.props;
    return <label className="err">{error}</label>;
  }
}

ErrorMessage.displayName = "Components/ErrorMessage";

ErrorMessage.defaultProps = {
  error: null
};

export default ErrorMessage;

import React from "react";

import "./input.css";

class Input extends React.Component {
  state = {
    id: "",
  };

  handleChangeID = (event) => {
    if (event.target.value > 0) this.setState({ id: event.target.value });
  };

  render() {
    const { id } = this.state;
    return (
      <div className="input-wrapper">
        <label>
          Generate password for ID:
          <input
            className="user-id"
            type="number"
            value={id}
            min={1}
            aria-label="id-input"
            onChange={(e) => this.handleChangeID(e)}
          />
        </label>
        <button
          data-testid="button"
          disabled={id ? false : true}
          className={id ? "active-btn" : "disable-btn"}
          onClick={() => this.props.handleGeneratePassword(id)}
        >
          Generate
        </button>
      </div>
    );
  }
}

Input.displayName = "Components/Input";

Input.defaultProps = {
  handleGeneratePassword: () => {}
};

export default Input;

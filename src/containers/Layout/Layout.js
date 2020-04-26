import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

// import modules
import { getPassword } from "../../modules/password";

//import components
import Table from "../../components/Table/Table";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import "./layout.css";

class Layout extends Component {
  state = {
    passwordExpiration: 30,
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  startTimer = () => {
    clearInterval(this.intervalId);
    this.setState({ passwordExpiration: 30 });
    this.intervalId = setInterval(this.timer.bind(this), 1000);
  };

  timer = () => {
    const { userId } = this.props;
    this.setState({
      passwordExpiration: this.state.passwordExpiration - 1,
    });
    if (this.state.passwordExpiration < 0) {
      this.handleGeneratePassword(userId);
    }
  };

  handleGeneratePassword = id => {
    const payload = {
      userId: id,
      dateTime: moment().unix(),
    };

    this.props.getPassword(payload);
    this.startTimer();
  };

  render() {
    const { passwordExpiration } = this.state;
    const { error, loading, generatedPassword, userId } = this.props;

    return (
      <div className="layout">
        <Header />
        <Input handleGeneratePassword={this.handleGeneratePassword} />
        <ErrorMessage error={error} />
        <Table
          passwordExpiration={passwordExpiration}
          generatedPassword={generatedPassword}
          loading={loading}
          userId={userId}
          error={error}
        />
      </div>
    );
  }
}

Layout.displayName = "Containers/Layout";

Layout.defaultProps = {
  error: null,
  userId: null,
  loading: false,
  generatedPassword: null,
};

const storeState = state => ({
  error: state.password.error,
  userId: state.password.userId,
  loading: state.password.loading,
  generatedPassword: state.password.generatedPassword,
});

const storeActions = {
  getPassword,
};

export default connect(storeState, storeActions)(Layout);

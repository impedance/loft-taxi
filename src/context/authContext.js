import React, { Component } from "react";

const AuthContext = React.createContext("");

class AuthProvider extends Component {
  state = {
    isAuth: false
  };
  logIn = () => {
    this.setState({ isAuth: true });
  };

  logOut = () => {
    this.setState({ isAuth: false });
  };

  getProviderValue = () => {
    const { isAuth } = this.state;
    return {
      isAuth,
      logIn: this.logIn,
      logOut: this.logOut
    };
  };

  render() {
    const { children } = this.props;
    return (
      <AuthContext.Provider value={this.getProviderValue()}>
        {children}
      </AuthContext.Provider>
    );
  }
}
export { AuthContext, AuthProvider };

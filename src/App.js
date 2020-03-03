import React, { useState, useContext } from 'react';

import Header from './components/Header';
import Profile from './components/Profile';
import Map from './components/Map/Map';
import LogInForm from './components/Login';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AppRouting } from './components/AppRouting';
import { isAuthSelector } from './core/store/selectors';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isAuth: isAuthSelector(state),
  };
};

const App = () => {
  const { isLogin } = this.props;
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          path="/dashboard"
          permitted={isLogin}
          component={AppRouting}
        />
        <Route exact path="/login" component={LogInForm} />
        {/*<Redirect*/}
      </Switch>
    </BrowserRouter>
  );
};

const PrivateRoute = ({ component: Component, permitted, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      permitted ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);
export default connect(mapStateToProps, null)(App);

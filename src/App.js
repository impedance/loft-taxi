import React, { useState, useContext } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Map from './components/Map/Map';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import { Paper } from '@material-ui/core';
import { AuthContext } from './context/authContext';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AppRouting } from './components/AppRouting';

const App = () => {
  const { isLogin = false } = this.props;
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          path="/dashboard"
          permitted={isLogin}
          component={AppRouting}
        ></PrivateRoute>
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

const PrivateRoute = ({ component: Component, permitted, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      permitted ? <Component {...props} /> : <Redirect to="/login"></Redirect>
    }
  ></Route>
);
export default App;

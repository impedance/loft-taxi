import React from 'react';
import {Dashboard} from '../Dashboard';
import {Switch, Route, Redirect } from 'react-router-dom';

export const AppRouting = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Redirect path="/dashboard/*" to="/dashboard/map" />
      </Switch>
    </div>
  )
}
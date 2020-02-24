import React from 'react';

import Profile from '../Profile';
import Map from '../Map';

import {Switch, Route } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>
      <Switch>
        <Route path="/dashboard/profile" component={Profile}></Route>
        <Route path="/dashboard/map" component={Map}></Route>
      </Switch>
    </div>
  )
}
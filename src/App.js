import React, { useState, useContext } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Map from './components/Map/Map';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import { Logo } from 'loft-taxi-mui-theme';
import { Paper } from '@material-ui/core';
import { AuthContext } from './context/authContext';

const paths = ['signin', 'profile', 'map', 'signup'];

const App = () => {
  const [currentPath, setCurrentPath] = useState('signin');
  const { isAuth } = useContext(AuthContext);
  const onPathChange = path => {
    setCurrentPath(path);
  };
  const renderCurrentComponent = path => {
    if (isAuth) {
      switch (path) {
        case 'profile':
          return <Profile />;
        default:
          return <Map />;
      }
    } else {
      switch (path) {
        case 'signup':
          return <SignUp onPathChange={onPathChange} />;
        default:
          return <Signin onPathChange={onPathChange} />;
      }
    }
  };
  return (
    <Paper>
      <div className="header">
        <Header paths={paths} onPathChange={onPathChange} />
        <div>{renderCurrentComponent(currentPath)}</div>
      </div>
      <Logo />
    </Paper>
  );
};

export default App;

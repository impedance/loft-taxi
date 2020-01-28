import React, { useState } from 'react';
import Header  from './components/Header';
import Profile from './components/Profile';
import Map  from './components/Map/Map';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
// @ts-ignore
import { Logo } from 'loft-taxi-mui-theme';
import {AuthContext} from './context/authContext';

const paths = ['login', 'profile', 'map', 'signup'];

const App = () => {
  const [currentPath, setCurrentPath] = useState('login');

  const onPathChange = (path) => {
    setCurrentPath(path);
  }
  const renderCurrentComponent = (path) => {
    switch (path) {
      case 'profile':
        return <Profile />;
      case 'map':
        return <Map />;
      case 'signup':
        return <SignUp onPathChange={onPathChange}/>;
      default:
        return <Signin onPathChange={onPathChange}/>;
    }
  }
  return (
    <div className="App">
      <AuthContext.Consumer>
        <div className="header">
          <Header 
            paths={paths} onPathChange={onPathChange}>          
          </Header>
          {renderCurrentComponent(currentPath)}
        </div>
      </AuthContext.Consumer>
      <Logo />
    </div>
  );
}

export default App;

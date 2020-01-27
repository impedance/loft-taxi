import React, { useState } from 'react';
import Header  from './components/Header';
import Profile from './components/Profile';
import Map  from './components/Map/Map';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
// @ts-ignore
import { Logo, MCLogo } from 'loft-taxi-mui-theme';

const paths = ['login', 'profile', 'map', 'signup'];

const App = () => {
  const [currentPath, setCurrentPath] = useState('login');

  const onPathChange = (path: string) => {
    setCurrentPath(path);
  }
  const renderCurrentComponent = (path: string) => {
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
    <div>
      <Header 
        paths={paths} onPathChange={onPathChange}>          
      </Header>
        {renderCurrentComponent(currentPath)}
      <Logo />
      {/* <MCLogo /> */}
    </div>
  );
}

export default App;

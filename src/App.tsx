import React from 'react';
import Header  from './components/Header';
import Profile from './components/Profile';
import Login  from './components/Login/Login';
import Map  from './components/Map/Map';

class App extends React.Component {
  render() {

    return (
      <>
        <Header />
        <Profile />
        <Map />
        <Login />
      </>
    );
  }
}

export default App;

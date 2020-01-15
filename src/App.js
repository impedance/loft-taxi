import React from 'react';
import { Header } from './components/header';
import { Profile } from './components/profile';
import { Login } from './components/login';
import { Map } from './components/map';
import { Registration } from './components/registration';

function App() {
  return (
    <>
      <Header />
      <Profile />
      <Map />
      <Login />
      <Registration />
    </>
  );
}

export default App;

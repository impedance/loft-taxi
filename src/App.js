import React, { useState, useContext } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Map from "./components/Map/Map";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import { Logo } from "loft-taxi-mui-theme";
import {Button} from '@material-ui/core';
import { AuthContext } from "./context/authContext";

const paths = ["login", "profile", "map", "signup"];

const App = () => {
  const [currentPath, setCurrentPath] = useState("login");
  const { isAuth, logIn, logOut } = useContext(AuthContext);
  const onPathChange = path => {
    setCurrentPath(path);
  };
  const renderCurrentComponent = path => {
    switch (path) {
      case "profile":
        return <Profile />;
      case "map":
        return <Map />;
      case "signup":
        return <SignUp onPathChange={onPathChange} />;
      default:
        return <Signin onPathChange={onPathChange} logIn={logIn} />;
    }
  };
  const logged = (
    <div>
      <Button size="small" onClick={logOut}>LogOut</Button>
      {renderCurrentComponent(currentPath)}
    </div>
  );
  const notLogged = (
    <div>
      <p>notLoggedIn</p>
      {renderCurrentComponent('login')}
    </div>
  );
  return (
    <div className="App">
      <div className="header">
        <Header paths={paths} onPathChange={onPathChange}></Header>
        <div>
          {isAuth ? logged : notLogged}
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default App;

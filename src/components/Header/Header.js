import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import './Header.css';
import { AuthContext } from '../../context/authContext';

const Header = ({ paths, onPathChange }) => {
  const { logOut } = useContext(AuthContext);
  return (
    <header>
      <ul>
        {paths.map((el, index) => (
          <li className="nav-button" key={index}>
            <Button onClick={() => onPathChange(el)}>{el}</Button>
          </li>
        ))}
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={logOut}
        >
          LogOut
        </Button>
      </ul>
    </header>
  );
};

export default Header;

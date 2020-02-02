import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import { AuthContext } from '../../context/authContext';

const SignUp = ({ onPathChange }) => {
  const { logIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };
  const onChangePassword = e => {
    setPassword(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    onPathChange('profile');
    logIn();
  };
  return (
    <div>
      <h1>Reg form</h1>
      <form onSubmit={onSubmit}>
        <label>
          email
          <input value={email} name="email" onChange={onChangeEmail}></input>
        </label>
        <label>
          password
          <input
            value={password}
            name="password"
            onChange={onChangePassword}
          ></input>
        </label>
        <Button type="submit" color="primary" variant="contained">
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default SignUp;

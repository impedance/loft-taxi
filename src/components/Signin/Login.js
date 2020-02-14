import React, { useState, useContext } from 'react';
import { Typography, Button, TextField } from '@material-ui/core';
import { AuthContext } from '../../context/authContext';

const LogIn = ({ onPathChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useContext(AuthContext);

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    logIn();
    onPathChange('map');
  };

  return (
    <div className="signin">
      <Typography variant="h6" align="left" gutterBottom>
        Лофт таксишка
      </Typography>
      <form>
        <TextField name="email" value={email} onChange={onChangeEmail} />
        <br />
        <TextField
          name="password"
          value={password}
          onChange={onChangePassword}
          className="form-control"
        />
      </form>
      <Button onClick={onSubmit} color="primary" variant="contained">
        Enter
      </Button>
    </div>
  );
};

export default LogIn;

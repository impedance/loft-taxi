import React, { useState } from 'react';
// import './Signin.css';
import { Typography, Button, TextField } from '@material-ui/core';

export interface SigninProps {
  onPathChange: (path: string) => void;
  logIn: () => void;
}

const Signin: React.SFC<SigninProps> = ({ onPathChange, logIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const onChangeEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e: any) => {
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

export default Signin;

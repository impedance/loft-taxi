import React, { useState } from 'react';
import { Typography, Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { isAuthSelector } from '../../core/store/selectors';
import { actions } from '../../core/store/duck';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    isAuth: isAuthSelector(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: userData => dispatch(actions.logIn(userData)),
  };
};

const LogInForm = ({ onPathChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangePassword = e => {
    setPassword(e.target.value);
  };

  const onChangeEmail = e => {
    setEmail(e.target.value);
  };

  const onSubmit = e => {
    const { logIn } = this.props;
    e.preventDefault();
    logIn(email, password);
  };

  const { isAuth } = this.props;
  console.log(isAuth);
  if (isAuth) {
    return <Redirect path="/login" to="/dashboard/map" />;
  }
  return (
    <div className="signin">
      <Typography variant="h6" align="left" gutterBottom>
        Лофт-такси
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

export default connect(mapStateToProps, mapDispatchToProps(LogInForm));

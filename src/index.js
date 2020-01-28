import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {AuthProvider} from './context/authContext';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <AuthProvider>
      <App />
    </AuthProvider>  
  </MuiThemeProvider>, document.getElementById('root')
);

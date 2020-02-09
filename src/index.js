import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { theme } from "loft-taxi-mui-theme";
import { MuiThemeProvider } from "@material-ui/core/styles";
import {AuthProvider} from './context/authContext';
import {Provider} from 'react-redux';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider>

    <AuthProvider>
      <App />
    </AuthProvider>  
    </Provider>
  </MuiThemeProvider>, document.getElementById('root')
);

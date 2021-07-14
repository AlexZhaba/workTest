import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import './index.scss'
import store from '@redux/store.js'
import App from './App.jsx'
import { theme } from './config'
import history from './history';

axios.defaults.baseURL = process.env.REACT_APP_DOMAIN;
if (module.hot) module.hot.accept();

ReactDOM.render(
  <Router  history={history}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <App/>
      </ThemeProvider>
    </Provider>
  </Router>
  ,
  document.getElementById('app')
)
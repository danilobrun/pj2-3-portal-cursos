import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from "react-router-dom"
import { GlobalStyled } from './assets/css/global'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
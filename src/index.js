import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
//Import Bootstrap minimal CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutedApp from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <link rel="stylesheet" href="https://use.typekit.net/mad4yme.css"></link>
    <RoutedApp />
  </Router>
  </React.StrictMode>,
  rootElement
);

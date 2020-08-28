import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root')
);

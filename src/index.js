import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './components/App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);
*/

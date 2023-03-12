import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/menu.css'

const root = ReactDOM.createRoot(document.getElementsByClassName('page')[0]);

root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);

reportWebVitals();

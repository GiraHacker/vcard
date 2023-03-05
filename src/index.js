import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './css/reset.css'
import './css/bootstrap-grid.min.css'
import './css/bootstrap-grid.min.css.map'
import './css/animations.css'
import './css/owl.carousel.css'
import './css/magnific-popup.css'
import './css/main.css'

const jsScript = ['js/animating.js',
                  'js/imagesloaded.pkgd.min.js',
                  'js/perfect-scrollbar.min.js',
                  'js/jquery.shuffle.min.js',
                  'js/masonry.pkgd.min.js',
                  'js/owl.carousel.min.js',
                  'js/jquery.magnific-popup.min.js',
                  'js/validator.js',
                  'js/main.js'
                  ];
const root = ReactDOM.createRoot(document.getElementsByClassName('page')[0]);

root.render(
  <React.StrictMode>
    <App scriptLoading={jsScript} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

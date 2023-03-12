import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const jsScript = [
                  'js/modernizr.custom.js',
                  'js/animating.js',
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

reportWebVitals();

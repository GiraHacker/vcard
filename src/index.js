import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


import Background from './images/main_bg.png'
//import reportWebVitals from './reportWebVitals';

const newDiv = document.createElement('div');
newDiv.classList.add('lm-animated-bg');
newDiv.classList.add('bg-image');
newDiv.style.backgroundImage =  `url(${Background})`;

// Obtenha o elemento body
const body = document.body;

// Insira o elemento newDiv como o primeiro filho do elemento body
body.insertBefore(newDiv, body.firstChild);



const root = ReactDOM.createRoot(document.getElementsByClassName("page")[0]);

root.render(
  <React.StrictMode>
      <div className="page-content">
        <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

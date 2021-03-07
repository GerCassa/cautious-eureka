import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contact from './authForm';
import  Clock  from './Clock';
import {Random} from './randomColorPicker.js';

ReactDOM.render(
  <React.StrictMode>
    <Clock/>
    <div className="App">Hi, welcome to my site</div>
    <Random/>
    <Contact/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contact from './App';
import  Clock  from './Clock';
import {Random} from './RandomColorPicker';

ReactDOM.render(
  <React.StrictMode>
    <Clock/>
    <Random/>
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import Contact from './Components/authForm';
import  Clock  from './Accesories/Clock';
import {Random} from './Components/RandomColorPicker';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Clock/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/colorPicker" component={Random}/>
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './styles/Navbar.css';

import Home from './Components/Home';
import Contact from './Components/authForm';
import  Clock  from './Accesories/Clock';
import Navbar from './Components/NavBar';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar/>
          <Clock/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/about" component={AboutMe}/>
          </Switch>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
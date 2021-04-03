import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './styleSheets/Navbar.css';

import Home from './Components/Home';
import Contact from './Components/Contact';
import Navbar from './Components/NavBar';
import Projects from './Components/Projects';
import AboutMe from './Components/AboutMe';

class App extends Component {

  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar/>
        <section id="home"><Home/></section>
        <section id="aboutMe"><AboutMe/></section>
        <section id="projects"><Projects/></section>
        <section id="contact"><Contact/></section>
      </React.Fragment>
      </Router>
    )
  }
}

export default App;



      // <Router>
      //   <React.Fragment>
      //     <Navbar/>
      //     <Clock/>
      //     <Switch>
      //     <Route exact path="/" component={Home}/>
      //     <Route exact path="/contact" component={Contact}/>
      //     <Route exact path="/projects" component={Projects}/>
      //     <Route exact path="/about" component={AboutMe}/>
      //     </Switch>
      //   </React.Fragment>
      // </Router>
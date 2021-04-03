import React from 'react';
import "../App.css";
import Navbar from './NavBar';

class Projects extends React.Component {
  render () {
    return (
      <div className="projects">
        <div className='projects-text'>
          <h1>My projects</h1>
          <ul>
          <a  className='projects-links' href="https://main.d3us38g0xqyx1f.amplifyapp.com/"><h2>ChewieRescue</h2></a>
          </ul>
        </div>
      </div>
    )
  }
}

export default Projects;
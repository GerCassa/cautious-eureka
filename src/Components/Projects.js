import React from 'react';
import {InView} from 'react-intersection-observer';
import "../App.css";
import "../styleSheets/Projects.css";
import chewie from '../Images/tatooine.png';
import pokedex from '../Images/pokedex.png';
import daboora from '../Images/BookingSystem.png';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {links: 'not-visible'}
  }

    visible(inView) {
    if(inView) {
      this.setState({links: 'visible'})
      console.log(this.state.links)
    } else {
      this.setState({links: 'not-visible'})
      console.log(this.state.links)
    }
  }

  render () {
    return (
      <div className="projects-section">
        <div>
          <h1 className='projects-title'><span>My projects</span></h1>
          <ul className="projects-list">
          {/* <InView as="div" onChange={(inView, entry) => this.visible(inView)}> */}
            <li className='project'>
              <a href='https://github.com/GerCassa/HotelMagamentApp-JAVA-REACT-' target='_blank'>
                <img src={daboora} alt='BookingSystem' className="image-link" />
              </a>
              <div className="name-description">
                <a className="project-a" href='https://github.com/GerCassa/HotelMagamentApp-JAVA-REACT-' target='_blank'>
                  <h3 className="project-name">Hotel Booking System</h3>
                </a>
                <p className="project-description"> React Front end with JAVA back end. MongoDB database. Booking system that handles REST and CRUD functionalities</p>
                <p className='tech'>ReactJS</p> <p className='tech'>JAVA</p> <p className='tech'>MongoDB</p>
              </div>
            </li>

            <li className='project'>
              <a href="https://main.d3us38g0xqyx1f.amplifyapp.com/" target='_blank'>
                 <img src={chewie} alt='ChewieRescueGame' className="image-link"/>
              </a> 
              <div className="name-description"> 
                <a className="project-a" href="https://main.d3us38g0xqyx1f.amplifyapp.com/" target='_blank'>
                 <h3 className="project-name">ChewieRescue</h3>
                </a> 
                 <p className="project-description">JS Game where you are Chewbacca trying to protect the Millenium Falcon</p>
                 <p className='tech'>ReactJS</p> <p className='tech'>CanvasHTML</p>
              </div>
            </li>

            <li className='project'>
              <a href="https://pokedex-js-gercassa.herokuapp.com/" target='_blank'>
                <img src={pokedex} alt='PokedexJS' className="image-link"/>  
              </a>
              <div className="name-description">
                <a className="project-a" href="https://pokedex-js-gercassa.herokuapp.com/" target='_blank'>
                  <h3 className="project-name">PokedexJS</h3>
                </a>
                <p className="project-description">React App imitating the traditional Pokedex. Rendering pokemons details directly from the API.</p>
                <p className='tech'>ReactJS</p> <p className='tech'>API</p>
              </div>
            </li>

            {/* </InView> */}

          </ul>
        </div>
      </div>
    )
  }
}

export default Projects;
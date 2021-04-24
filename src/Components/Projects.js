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
              <a className='image-link' href="https://main.d3us38g0xqyx1f.amplifyapp.com/">
                 <img src={chewie} alt='ChewieRescueGame' width='250' height='150'/>
              </a> 
              <div className="name-description">  
                 <h3 className="project-name">ChewieRescue</h3>
                 <p className="project-description">JS Game where you are Chewbacca trying to protect the Millenium Falcon</p>
              </div>
            </li>

            <li className='project'>
              <a href="https://pokedex-js-gercassa.herokuapp.com/">
                <img src={pokedex} alt='PokedexJS' width='250' height='150'/>  
              </a>
              <div className="name-description">
                <h3 className="project-name">PokedexJS</h3>
                <p className="project-description">React App imitating the traditional Pokedex. Rendering pokemons details directly from the API.</p>
              </div>
            </li>

            <li className='project'>
              <a href='https://github.com/GerCassa/HotelMagamentApp-JAVA-REACT-'>
                <img src={daboora} alt='BookingSystem' width='250' height='150' />
              </a>
              <div className="name-description">
                <h3 className="project-name">Hotel Booking System</h3>
                <p className="project-description"> React Front end with JAVA back end. MongoDB database. Booking system that handles RESTful functionalities</p>
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
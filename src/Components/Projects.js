import React from 'react';
import {InView} from 'react-intersection-observer';
import "../App.css";
import "../styleSheets/Projects.css";
import chewie from '../Images/tatooine.png';
import pokedex from '../Images/pokedex.png';

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
      <div className="projects">
        <div>
          <h1 className='projects-title'>My projects</h1>
          <ul className="project-links">
          <InView as="div" onChange={(inView, entry) => this.visible(inView)}>
            <li>
              <a className={this.state.links} href="https://main.d3us38g0xqyx1f.amplifyapp.com/">
                 ChewieRescue
                 <img src={chewie} alt='ChewieRescueGame' width='250' height='150'/>
              </a>
                 
            </li>
            <li>
              <a className={this.state.links} href="https://pokedex-js-gercassa.herokuapp.com/">
                PokedexJS
                <img src={pokedex} alt='PokedexJS' width='250' height='150'/>  
              </a>
            </li>
            </InView>
          </ul>
        </div>
      </div>
    )
  }
}

export default Projects;
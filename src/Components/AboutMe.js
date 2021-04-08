import React from 'react';
import "../styleSheets/AboutMe.css";
import { InView } from 'react-intersection-observer';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'hidden-aboutText'};
    this.visible = this.visible.bind(this);
  }

  visible(inView) {
    if(inView) {
      // console.log(inView)
      this.setState({text: 'shown-aboutText'})
    } else {
      // console.log(inView)
      this.setState({text: 'hidden-aboutText'})
    }
  }

  render () {
    return (
      <div className="aboutMe">
          <div  className="aboutMe-text">
            <h1><span>About Me</span></h1>
          </div>
        <InView as="div" onChange={(inView, entry) => this.visible(inView)}>
            <h4 className={this.state.text}>
              I was born in the small town El Calafate, in the south of Argentinean Patagonia. I lived there most of my life, enjoying the landscapes and endless hikes along the mountains and glaciers. <br/>
              Since an early age, I've had a love for computers and video games (and anime!). My town attracts a lot of visitors, so working in Tourism was a natural step. I worked within the industry for more than ten years. <br/>
            Since moving to Scotland, I've begun to pursue my dream of being a Software Developer</h4>
        </InView>
      </div>
    )
  }
}

export default AboutMe;
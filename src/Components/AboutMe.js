import React from 'react';
import "../styleSheets/AboutMe.css";
import { InView } from 'react-intersection-observer';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'hidden'};
    this.visible = this.visible.bind(this);
  }

  visible(inView) {
    if(inView) {
      // console.log(inView)
      this.setState({text: 'shown'})
    } else {
      // console.log(inView)
      this.setState({text: 'hidden'})
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
              I was born in a very small town in south of the Argentinean Patagonia, El Calafate. I lived there most of my life, enjoying the landscapes and endless hikes along the mountains and glaciers. <br/>
              Since an early age I developed a love for computers and video games, but because of my great social skills, I began a career in Tourism, which I continued for more than ten years. <br/>
              After moving to Scotland, I have decided to pursue my teens dream of becoming a Software Developer</h4>
        </InView>
      </div>
    )
  }
}

export default AboutMe;
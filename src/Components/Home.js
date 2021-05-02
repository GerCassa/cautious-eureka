import React from 'react';
import "../styleSheets/Home.css";
import { InView } from 'react-intersection-observer';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: "hidden"};
    this.visible = this.visible.bind(this);
  }

  visible(inView) {
    if(inView) {
      // console.log(inView)
      this.setState({text: 'here'})
    } else {
      // console.log(inView)
      this.setState({text: 'not-here'})
    }
  }


  render () {
    return (
      <div className='home'>
        <div className={this.state.text}>
          <InView as="div" onChange={(inView, entry) => this.visible(inView)}>
          <h1><span>Hello World!</span></h1>
          <h3>My name is <span>Germán Cassagnes</span> and I am a Full-Stack Web Developer.</h3>
          <h4>I specialize in responsive and intuitive websites, and I am currently experimenting with games making.<br/> My main focus is to create clean code and happy user experiences. </h4>
          </InView>
          <h3>My Stack</h3>
          
          <div className='stackContainer'>
            <ul className="backend-list">
              <li className='list-title'>Backend</li>
              <li className="Java"></li>
              <li className="MongoDB"></li>
              <li className="PostgresSQL"></li>
            </ul> <br className="stack-spacer"/>
            <ul className="frontend-list">
              <li className='list-title'>Frontend</li>
              <li className="JS"></li>
              <li className="Ruby"></li>
              <li className="HtmlCss"></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

//Scroll button in case I want it back :)
<div className='scroller bounce'>
  <a className='scroll-button'href="#aboutMe">↓ Show me more! ↓</a>
</div>
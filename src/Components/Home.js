import React from 'react';
import "../styleSheets/Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {home: "home"};
  }

  // componentDidMount(){
  //   console.log(this.state.home)
  //   this.setState({home: "home-active"})
  // }


  render () {
    return (
      <div className={this.state.home}>
        <div className='home-text'>
          <h1>Hello World!</h1>
          <h3>I am Germán Cassagnes and I am a Full-Stack Web Developer.</h3>
          <h4>I specialize in responsive, intuitive and lovely websites, and I also enjoy designing databases.<br/> My main focus is to create clean code and happy user experiences. </h4>
          <h3>My Skills</h3>
          <div>
            <ul className="backend-list">
              <li className="Java"></li>
              <li className="MongoDB"></li>
              <li className="PostgresSQL"></li>
            </ul>
            <ul className="frontend-list">
              <li className="JS"></li>
              <li className="Ruby"></li>
              <li className="HtmlCss"></li>
            </ul>
          </div>
          {/* <div className='scroller bounce'>
            <a className='scroll-button'href="#aboutMe">↓ Show me more! ↓</a>
          </div> */}
        </div>
      </div>
    )
  }
}

export default Home;
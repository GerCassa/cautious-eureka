import React from 'react';
import "../Styles/Home.css";

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
          <h4>I specialize in responsive, intuitive and attractive websites.<br/> My main focus is to create clean code and happy user experiences. </h4>
          <h3>Stack</h3>
        <div>
          <ul className="backend-list">
            <li><h2>Back-End</h2></li>
            <li className="Java"></li>
            <li className="MongoDB"></li>
            <li className="PostgresSQL"></li>
          </ul>
          <ul className="frontend-list">
            <li><h2>Front-End</h2></li>
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
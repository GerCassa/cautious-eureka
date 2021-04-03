import React from "react";
import {Squash as Hamburger} from 'hamburger-react'
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {menu: "menu-closed"};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
        console.log(this.state.menu)
  }

  componentDidUpdate(){
        console.log(this.state.menu)

  }

  handleClick () {
    if (this.state.menu === "menu-closed") {
    this.setState({menu: "menu-open"})
    } else {
      this.setState({menu: "menu-closed"})
    }
  }
  

  render () {
    return (
      <div className="nav-wrapper">
        <div className="burger">
          <Hamburger direction="right" onToggle={toggled => this.handleClick()}/>
        </div>
        <div>
          <ul  className={this.state.menu}>
            <li className="nav-text"><a className='nav-a' href="/">Home</a> </li>
            <li className="nav-text"><a className='nav-a' href="#aboutMe">AboutMe</a></li>
            <li className="nav-text"><a className='nav-a' href="#projects">Projects</a></li>
            <li className="nav-text"><a className='nav-a' href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;


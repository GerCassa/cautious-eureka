import React from "react";
import Hamburger from 'hamburger-react'

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
        <div className={this.state.menu}>
          <ul className='nav-menu-items'>
            <li className="nav-text"><a href="/">Home</a></li>
            <li className="nav-text"><a href="/projects">Projects</a></li>
            <li className="nav-text"><a href="/about">About Me</a></li>
            <li className="nav-text"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;


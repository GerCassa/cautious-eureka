import React from 'react';
import '../App.css';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'Yaay',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password === this.state.password;
    this.setState({
      authorized: auth
    })
  }

  render() {

    const login = <form onSubmit={this.authorize}action="#">
      <input type="password" placeholder="Password" />
      <input type="submit"/>
    </form>

    const yaay = (
      <ul>
        <li>
          That is the right Password!
        </li>
      </ul>
    );

    return (
      <div className="App">
        <a href="/">Home</a>
        <h1>{ this.state.authorized ?'Yaay' : 'Enter the Password..'}</h1>
        <h1>{ this.state.authorized ? yaay : login}</h1>
      </div>
    );
  }
}

export default AuthForm;

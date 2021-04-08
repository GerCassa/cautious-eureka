import React from 'react';
import * as emailjs from 'emailjs-com';
import '../styleSheets/Contact.css'

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: null,
                  name: null,
                  message: null};
    this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount() {
    const btn = document.getElementById('sendButton')
    var esto = this
    console.log(this.state)


    emailjs.init('user_B0coMW6msCzemeShHfAoP')
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      if (esto.state.email === null || esto.state.name === null || esto.state.message === null) {
        alert('Please fill in all fields.')
        console.log('bien')
      } else {
        btn.value = 'Sending..';
      this.contact_number.value = Math.random() * 100000 | 0;

        emailjs.sendForm('contact_service', 'contact_form', this)
        .then(function() {
          btn.value = 'Message Sent :)'
          var form = document.getElementById("contact-form");
          form.reset(); 
            console.log('SUCCESS!');
        }, function(error) {
          btn.value = 'SUBMIT'
            console.log('FAILED...', error);
      })};
    });
  }

  render () {
    return (
      <div className="contact">
        <h1><span>Contact</span></h1> 
        <h4>If you have any questions or want to create something amazing together? Drop me a message!</h4>                 
        <div>
          <form id='contact-form'>
            <input type="hidden" name="contact_number"></input>

            <input placeholder="Name" name='user_name' type="text" required="" 
            onChange={event => this.setState({name: event.target.value})}/>

            <input placeholder="Enter email" name='user_email' type="email" required="" 
            onChange={event => this.setState({email: event.target.value})}></input>

            <textarea placeholder="Your Message" name='message'
            onChange={event => this.setState({message: event.target.value})}></textarea>

            <input id="sendButton" type='submit'  value="SUBMIT"></input>
          </form>
        </div>
        <div id='success'>

        </div>
      </div>
    )
  }
}

export default Contact;

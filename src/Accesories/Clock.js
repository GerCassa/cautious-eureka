import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div className="time">
        UK- 
        {this.props.isPrecise ? this.state.date.toISOString() : this.state.date.toLocaleTimeString('en-GB', {timeZone:'Europe/London'})} <br/>
        Arg-
        {this.props.isPrecise ? this.state.date.toISOString() : this.state.date.toLocaleTimeString('en-GB', {timeZone: 'America/Buenos_Aires'})}
      </div>
    );
  }
  startInterval() {
    let delay;
    if (this.props.isPrecise) {
      delay = 100;
    } else {
      delay = 1000;
    }
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  componentDidMount() {
    this.startInterval();
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.isPrecise === prevProps.isPrecise) {
  //     return;
  //   }
  //   clearInterval(this.intervalID);
  //   this.startInterval();
  // }
  // componentWillUnmount() {
  //   clearInterval(this.intervalID);
  // }
}

export default Clock;
import React from "react";

class RollLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
    };
  }

  // addToLog = () => {
  //   let newLog = log
  //   newLog.push(lastRoll);
  //   return newLog;
  // };

  componentDidMount = () => {
    fetch(`/session?characterId=${this.props.characterId}`)
      .then((response) => response.json())
      .then((log) => this.setState(log));
    // .then(console.log('characters are', this.state.characters))
  };
  // componentDidMount = () => {
  //   // fetch the roll log from backend
  //   this.setState({
  //     log: this.props.lastRoll,
  //   });
  // };

  // componentDidUpdate = () => {
  //   // post new roll log to backend
  //   const arr = this.state.log;
  //   console.log(arr);
  //   this.setState({
  //     log: arr.push(this.props.lastRoll),
  //   });
  // };

  render() {
    return (
      <div>
        RollLog
        {this.state.log}
      </div>
    );
  }
}

export default RollLog;

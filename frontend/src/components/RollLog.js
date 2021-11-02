import React from "react";

class RollLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rollLog: [],
    };
  }

  //FIGURE OUT A WAY TO FIND THE ARRAY WITH THE LOG ENTRIES THEN MAP THROUGH THE ENTRIES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // addToLog = () => {
  //   let newLog = log
  //   newLog.push(lastRoll);
  //   return newLog;
  // };

  componentDidMount = () => {
    fetch(`/rollLog?characterId=${this.props.id}`)
      .then((response) => response.json())
      .then(({rollLog}) => this.setState({ rollLog }));
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
      <>
        <div>RollLog:</div>
        {console.log(this.state)}
        {this.state.rollLog.map((entry) => (
          <div key={entry._id}>{entry.timestamp}: {entry.text}</div>
        ))}
      </>
    );
  }
}

export default RollLog;

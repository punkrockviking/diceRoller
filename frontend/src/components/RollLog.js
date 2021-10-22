import React from "react";

class RollLog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: [],
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
      // fetch(`/session`)
      .then((response) => response.json())
      .then((rolllogs) => this.setState({ log: rolllogs }));
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
      <div onClick={() => console.log(this.state)}>
        RollLog:
        {/* <div>
          {this.state.log.map((entry) => (
            <input key={entry._id} value={entry.text}>
              {entry.text}
            </input>
          ))}
        </div> */}
      </div>
    );
  }
}

export default RollLog;

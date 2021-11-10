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
  //   let newLog = this.props.log
  //   newLog.push(this.props.lastRoll);
  //   console.log(newLog)
  //   return newLog;
  // };

  componentDidMount = () => {
    fetch(`/rollLog?characterId=${this.props.id}`)
      .then((response) => response.json())
      .then(({rollLog}) => this.props.fetch({ rollLog }));
  };


  // componentDidUpdate = () => {
  //   // post new roll log to backend
  //   let arr = this.props.log;
  //   console.log(arr);
  //   arr = arr.push(this.props.lastRoll)
  //   console.log(arr)
  // };

  render() {
    return (
      <>
        <div>RollLog:</div>
        {this.props.log.map((entry) => (
          <div key={entry._id}>{entry.timestamp}: {entry.text}</div>
        ))}
      </>
    );
  }
}

export default RollLog;

import React from "react";

class RollLog extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     rollLog: [],
  //   };
  // }

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

  onClick = () => {
    this.props.update(this.props.createEntry(this.props.lastRoll))
  }

  componentDidUpdate = () => {
    // // endless loop
    // this.props.update(this.props.createEntry(this.props.lastRoll))
    
  //   // post new roll log to backend
  //   fetch(`/session`, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(this.props.lastRoll),
  //   });
  };

  render() {
    return (
      <>
        <div onClick={this.onClick} >RollLog:</div>
        {this.props.log.map((entry) => (
          <div key={entry._id}>{entry.timestamp}: {entry.text}</div>
        ))}
      </>
    );
  }
}

export default RollLog;

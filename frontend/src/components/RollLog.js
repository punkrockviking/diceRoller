import React from "react";

class RollLog extends React.Component {
  componentDidMount = () => {
    // fetch the roll log from backend
  };

  componentDidUpdate = () => {
    // post new roll log to backend
    // console.log(this.props.character);
    fetch(`/session`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.props.rollLog),
    });
  };

  render() {
    <div>RollLog</div>;
  }
}

export default RollLog;

import React from "react";

class RollButton extends React.Component {
  // need to change config so that dice components update the Session state to which die is selected
  // need to pass down selected dice and roll with those.
  // need to update state of rawRoll on Session

  onRoll = (event) => {
    event.preventDefault();
    const rollDice = () => {
      let totalRoll = 0;
      for (let i = 1; i <= this.props.qty; i++) {
        totalRoll += Math.ceil(Math.random() * this.props.sides);
      }
      console.log(
        `You rolled ${this.props.qty} ${this.props.name} for a total of:`,
        totalRoll
      );
      return this.props.updateRawRoll(totalRoll);
    };
    rollDice();
  };

  render() {
    return (
      <div>
        {`Roll a ${this.props.name} ${this.props.qty} times!`}
        <button onClick={this.onRoll}>Roll!</button>
      </div>
    );
  }
}

export default RollButton;

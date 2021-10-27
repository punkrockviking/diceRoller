import React from "react";

class RollButton extends React.Component {
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

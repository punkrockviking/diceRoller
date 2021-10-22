import React from "react";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qtyOfDice: 1,
    };
  }

  onQtyChange = (event) => {
    this.setState({ qtyOfDice: event.target.valueAsNumber });
  };

  onDiceClick = () => {
    const rollDice = () => {
      let totalRoll = 0;
      for (let i = 1; i <= this.state.qtyOfDice; i++) {
        totalRoll += Math.ceil(Math.random() * this.props.sides);
      }
      console.log(
        `You rolled ${this.state.qtyOfDice} D${this.props.sides} for a total of:`,
        totalRoll
      );
      return this.props.updateRawRoll(totalRoll);
    };
    rollDice();
  };

  render() {
    return (
      <div>
        <div>
          <label>
            How many dice?
            <input
              type="number"
              min="1"
              value={this.state.qtyOfDice}
              onChange={this.onQtyChange}
            >
              {this.state.numberOfDice}
            </input>
          </label>
        </div>
        <div onClick={this.onDiceClick}>
          <label>D{this.props.sides}</label>
        </div>
      </div>
    );
  }
}

export default Dice;

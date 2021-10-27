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
    this.props.updateSelectedDiceQty(event.target.valueAsNumber);
    this.props.updateSelectedDice(this.props.sides);
  };

  onDiceClick = () => {
    this.props.updateSelectedDice(this.props.sides);
    this.props.updateSelectedDiceQty(this.state.qtyOfDice);
    // const rollDice = () => {
    //   let totalRoll = 0;
    //   for (let i = 1; i <= this.state.qtyOfDice; i++) {
    //     totalRoll += Math.ceil(Math.random() * this.props.sides);
    //   }
    //   console.log(
    //     `You rolled ${this.state.qtyOfDice} ${this.props.name} for a total of:`,
    //     totalRoll
    //   );
    //   return this.props.updateRawRoll(totalRoll);
    // };
    // rollDice();
  };

  render() {
    return (
      <div>
        <div>
          <div onClick={this.onDiceClick}>
            <label>{this.props.name}</label>
          </div>
          <label>
            Qty?
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
      </div>
    );
  }
}

export default Dice;

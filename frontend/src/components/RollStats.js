import React from "react";

class RollStats extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     selectedStat: "",
  //   };
  // }

  onStatClick = (event) => {
    console.log(event.target.value);
    this.props.onChooseStat(event.target.value);
    // this.setState({ selectedStat: event.target.value });
    // console.log(this.state.selectedStat);
  };

  render() {
    return (
      <div onClick={this.onStatClick}>
        <input type="radio" value="str" name="stat" /> STR
        <input type="radio" value="dex" name="stat" /> DEX
        <input type="radio" value="con" name="stat" /> CON
        <input type="radio" value="wis" name="stat" /> WIS
        <input type="radio" value="int" name="stat" /> INT
        <input type="radio" value="chr" name="stat" /> CHR
      </div>
    );
  }
}

export default RollStats;

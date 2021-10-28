import React from "react";

class Proficiency extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     proficiency: "",
  //   };
  // }

  calcProficiency = () => {
    if (this.props.level <= 4) {
      return this.props.update(2);
    }
    if (this.props.level <= 8) {
      return this.props.update(3);
    }
    if (this.props.level <= 12) {
      return this.props.update(4);
    }
    if (this.props.level <= 16) {
      return this.props.update(5);
    }
    if (this.props.level <= 20) {
      return this.props.update(6);
    }
  };

  calcExpertise = () => {
    if (this.props.level <= 4) {
      return this.props.update(4);
    }
    if (this.props.level <= 8) {
      return this.props.update(6);
    }
    if (this.props.level <= 12) {
      return this.props.update(8);
    }
    if (this.props.level <= 16) {
      return this.props.update(10);
    }
    if (this.props.level <= 20) {
      return this.props.update(12);
    }
  };

  calcJackOfAllTrades = () => {
    this.props.update(1);
  };

  onProfClick = (event) => {
    if (event.target.value === "proficient") {
      this.calcProficiency();
    } else if (event.target.value === "expertise") {
      this.calcExpertise();
    } else if (event.target.value === "jackOfAllTrades") {
      this.calcJackOfAllTrades();
    }
    console.log(event.target.value);
  };

  render() {
    return (
      <div onClick={this.onProfClick}>
        <input type="radio" value="proficient" name="proficiency" /> Proficient
        <input type="radio" value="expertise" name="proficiency" /> Expertise
        <input type="radio" value="jackOfAllTrades" name="proficiency" /> Jack
        of All Trades
      </div>
    );
  }
}

export default Proficiency;

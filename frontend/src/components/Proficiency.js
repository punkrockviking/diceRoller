import React from "react";

class Proficiency extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     proficiency: "",
  //   };
  // }

  calc = () => {
    if (this.props.level <= 4) {
      return 2;
    }
    if (this.props.level <= 8) {
      return 3;
    }
    if (this.props.level <= 12) {
      return 4;
    }
    if (this.props.level <= 16) {
      return 5;
    }
    if (this.props.level <= 20) {
      return 6;
    }
  }

  calcProficiency = () => {
    const bonus = this.calc()
    return this.props.update(bonus)
  };

  calcExpertise = () => {
    const bonus = this.calc() * 2
    return this.props.update(bonus)
  };

  calcJackOfAllTrades = () => {
    const bonus = Math.floor(this.calc() / 2)
    this.props.update(bonus);
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

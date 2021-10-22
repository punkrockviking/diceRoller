import React from "react";

class Proficiency extends React.Component {
  constructor() {
    super();
    this.state = {
      proficiency: "",
    };
  }

  onProfClick = (event) => {
    console.log(event.target.value);
    this.setState({ proficiency: event.target.value });
    // console.log(this.state.proficiency);
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

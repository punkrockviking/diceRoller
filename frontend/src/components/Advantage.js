import React from "react";

class Advantage extends React.Component {
  constructor() {
    super();
    this.state = {
      advantage: "",
    };
  }

  onAdvClick = (event) => {
    console.log(event.target.value);
    this.setState({ advantage: event.target.value });
    // console.log(this.state.advantage);
  };

  render() {
    return (
      <div onClick={this.onAdvClick}>
        <input type="radio" value="advantage" name="advantage" /> Advantage
        <input type="radio" value="disadvantage" name="advantage" />
        Disadvantage
      </div>
    );
  }
}

export default Advantage;

import React from "react";
import Button from "./Button"

class RollStats extends React.Component {

  onStatClick = (event) => {
    console.log(event.target.name);
    this.props.onChooseStat(event.target.name);
  };

  render() {
    return (
      <div onClick={this.onStatClick}>
        <Button name="str" backgroundColor="cyan" hoverColor="lightBlue" focusColor="blue" > STR </Button>
        <Button name="dex" backgroundColor="cyan" hoverColor="lightBlue" focusColor="blue" > DEX </Button>
        <Button name="con" backgroundColor="cyan" hoverColor="lightBlue" focusColor="blue" > CON </Button>
        <Button name="wis" backgroundColor="cyan" hoverColor="lightBlue" focusColor="blue" > WIS </Button>
        <Button name="int" backgroundColor="cyan" hoverColor="lightBlue" focusColor="blue" > INT </Button>
        <Button name="chr" backgroundColor="cyan" hoverColor="lightBlue" focusColor="blue" > CHR </Button>
      </div>
    );
  }
}

export default RollStats;

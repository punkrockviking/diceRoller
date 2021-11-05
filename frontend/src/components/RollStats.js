import React from "react";
import Button from "./Button"

class RollStats extends React.Component {

  onStatClick = (event) => {
    const { selectedStatName, resetStatMod, onChooseStat } = this.props
    console.log(event.target.name);
    if (selectedStatName === event.target.name) {
      console.log('GONNA BLUR HOMIE!!!!!!!!!!!!!', selectedStatName, event.target.name)
      event.target.blur()
      resetStatMod()
    } else {
      onChooseStat(event.target.name);
    }
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

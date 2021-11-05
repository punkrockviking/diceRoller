import React from "react";
import Button from "./Button"

class RollStats extends React.Component {

  onStatClick = (event) => {
    const { selectedStatName, resetStatMod, onChooseStat } = this.props
    console.log(event.target.name);
    if (selectedStatName === event.target.name) {
      resetStatMod()
    } else {
      onChooseStat(event.target.name);
    }
  };

  render() {
    const { selectedStatName } = this.props
    return (
      <div onClick={this.onStatClick}>
        <Button name="str" backgroundColor={selectedStatName === "str" ? "cyan" : "blue"} > STR </Button>
        <Button name="dex" backgroundColor={selectedStatName === "dex" ? "cyan" : "blue"} > DEX </Button>
        <Button name="con" backgroundColor={selectedStatName === "con" ? "cyan" : "blue"} > CON </Button>
        <Button name="wis" backgroundColor={selectedStatName === "wis" ? "cyan" : "blue"} > WIS </Button>
        <Button name="int" backgroundColor={selectedStatName === "int" ? "cyan" : "blue"} > INT </Button>
        <Button name="chr" backgroundColor={selectedStatName === "chr" ? "cyan" : "blue"} > CHR </Button>
      </div>
    );
  }
}

export default RollStats;

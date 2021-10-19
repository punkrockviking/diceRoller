import React from "react";
import Form from "./Form";

class CharacterInfo extends React.Component {
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.props.character);
    fetch(`/session`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.props.character),
    });
  };

  render() {
    return (
      <div>
        Info for {this.props.character.name} is displayed here!
        <div>
          <form onSubmit={this.onFormSubmit}>
            <label>
              NAME
              <input
                type="string"
                name="name"
                value={this.props.character.name}
                onChange={this.props.onStatChange}
              />
            </label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              LEVEL
              <input
                type="number"
                name="level"
                value={this.props.character.level}
                onChange={this.props.onStatChange}
              />
            </label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              STR
              <input
                type="number"
                name="str"
                value={this.props.character.str}
                onChange={this.props.onStatChange}
              />
            </label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              DEX
              <input
                type="number"
                name="dex"
                value={this.props.character.dex}
                onChange={this.props.onStatChange}
              />
            </label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              CON
              <input
                type="number"
                name="con"
                value={this.props.character.con}
                onChange={this.props.onStatChange}
              />
            </label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              WIS
              <input
                type="number"
                name="wis"
                value={this.props.character.wis}
                onChange={this.props.onStatChange}
              />
            </label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              INT
              <input
                type="number"
                name="int"
                value={this.props.character.int}
                onChange={this.props.onStatChange}
              />
            </label>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <label>
              CHR
              <input
                type="number"
                name="chr"
                value={this.props.character.chr}
                onChange={this.props.onStatChange}
              />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default CharacterInfo;

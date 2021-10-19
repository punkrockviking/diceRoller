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
              STR
              <input
                type="number"
                name="str"
                value={this.props.character.str}
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

import React from "react";
import Profiles from "./Profiles";
// import { Button } from './Button'
import Session from "./Session";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProfile: "",
      characters: [],
      selectedCharacter: "",
    };
  }

  onProfileClick = (event) => {
    // console.log(this)
    event.preventDefault();
    // console.log(event)
    this.setState(
      { selectedProfile: event.target.attributes.value.value },
      console.log(this.state)
    );
  };

  // onCharacterClick = (event) => {
  //     event.preventDefault()
  //     this.setState( {selectedCharacter: event.target.attributes.value.nodeValue}, console.log(this.state.selectedCharacter) )
  // }

  componentDidUpdate = (prevProp, prevState) => {
    if (this.state.selectedProfile !== prevState.selectedProfile) {
      fetch(`/session?profileId=${this.state.selectedProfile}`)
        .then((response) => response.json())
        .then((characters) => this.setState({ characters }));
    }
  };

  render() {
    // console.log(this.state)
    return (
      <div>
        <div>
          <div>App Component</div>
          {this.state.selectedProfile ? (
            <Session profile={this.state.selectedProfile} />
          ) : (
            <div>
              Select a profile:
              <Profiles handleClick={this.onProfileClick} />
            </div>
          )}
        </div>
        {/* <div>
                    <Button backgroundColor='cyan' >Test Button</Button>
                </div> */}
      </div>
    );
  }
}

export default App;

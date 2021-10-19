import React from "react";
import ProfileBanner from "./ProfileBanner";
import InfoBlock from "./InfoBlock";
import MainRoller from "./MainRoller";
import QuickOptions from "./QuickOptions";
import CharacterList from "./CharacterList";
import CharacterInfo from "./CharacterInfo";
import Dice from "./Dice";

class Session extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      selectedCharacter: {
        _id: "",
        name: "",
        _profile: {},
        class: "",
        level: null,
        str: null,
        dex: null,
        con: null,
        wis: null,
        int: null,
        chr: null,
        defaultAttack: {},
      },
    };
  }

  onStatChange = (event) => {
    console.log(event);
    this.setState({
      selectedCharacter: {
        ...this.state.selectedCharacter,
        [event.target.name]: event.target.valueAsNumber,
      },
    });
  };

  componentDidMount = () => {
    fetch(`/session?profileId=${this.props.profile}`)
      .then((response) => response.json())
      .then((characters) => this.setState(characters));
    // .then(console.log('characters are', this.state.characters))
  };

  onCharacterClick = (event) => {
    event.preventDefault();
    const targetId = event.target.attributes.value.value;
    const selectedCharacter = this.state.characters.find(
      (character) => character._id === targetId
    );
    // console.log(event)
    this.setState(
      { selectedCharacter },
      console.log("selectedCharacter state updated")
    );
  };

  render() {
    console.log(this.state.selectedCharacter);
    return (
      <div>
        {/* {this.props.data} */}
        <div>
          {this.state.selectedCharacter._id ? (
            // <div>Selected Character is {JSON.stringify(this.state.selectedCharacter)}</div>
            <CharacterInfo
              character={this.state.selectedCharacter}
              onStatChange={this.onStatChange}
            />
          ) : (
            <CharacterList
              characters={this.state.characters}
              handleClick={this.onCharacterClick}
            />
          )}
        </div>
        <div>
          <Dice sides="4" />
          <Dice sides="6" />
          <Dice sides="8" />
          <Dice sides="10" />
          <Dice sides="12" />
          <Dice sides="20" />
          <Dice sides="100" />
        </div>
        <ProfileBanner />
        <InfoBlock />
        <MainRoller />
        <QuickOptions />
      </div>
    );
  }
}

export default Session;

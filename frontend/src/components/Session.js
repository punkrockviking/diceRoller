import React from "react";
import ProfileBanner from "./ProfileBanner";
import InfoBlock from "./InfoBlock";
import MainRoller from "./MainRoller";
import QuickOptions from "./QuickOptions";
import CharacterList from "./CharacterList";
import CharacterInfo from "./CharacterInfo";
import Dice from "./Dice";
import Total from "./Total";

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
      rawRoll: null,
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

  updateTotal = (total) => {
    this.setState({ rawRoll: total });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.selectedCharacter._id ? (
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
          <Dice updateTotal={this.updateTotal} name="D4" sides="4" />
          <Dice updateTotal={this.updateTotal} name="D6" sides="6" />
          <Dice updateTotal={this.updateTotal} name="D8" sides="8" />
          <Dice updateTotal={this.updateTotal} name="D10" sides="10" />
          <Dice updateTotal={this.updateTotal} name="D12" sides="12" />
          <Dice updateTotal={this.updateTotal} name="D20" sides="20" />
          <Dice updateTotal={this.updateTotal} name="D100" sides="100" />
        </div>
        <Total total={this.state.rawRoll} onDiceClick={this.onDiceClick} />
        <ProfileBanner />
        <InfoBlock />
        <MainRoller />
        <QuickOptions />
      </div>
    );
  }
}

export default Session;

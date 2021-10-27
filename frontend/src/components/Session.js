import React from "react";
import ProfileBanner from "./ProfileBanner";
import InfoBlock from "./InfoBlock";
import MainRoller from "./MainRoller";
import QuickOptions from "./QuickOptions";
import CharacterList from "./CharacterList";
import CharacterInfo from "./CharacterInfo";
import Dice from "./Dice";
import Total from "./Total";
import RollStats from "./RollStats";
import Proficiency from "./Proficiency";
import Advantage from "./Advantage";
import RollLog from "./RollLog";

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
      selectedDice: "",
      rawRoll: null,
      statMod: null,
      advantage: "",
      proficient: "",
      featMod: "",
      rollLog: [],
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

  onChooseStat = (stat) => {
    this.setState({
      statMod: Math.floor((this.state.selectedCharacter[stat] - 10) / 2),
    });
    console.log("Your stat mod is ", this.state.statMod);
  };

  calcTotalRoll = () => {
    if (this.state.rawRoll) {
      const totalRoll = this.state.rawRoll + this.state.statMod;
      return totalRoll;
    }
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

  updateRawRoll = (total) => {
    this.setState({ rawRoll: total });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.selectedCharacter._id ? (
            <div>
              <CharacterInfo
                character={this.state.selectedCharacter}
                onStatChange={this.onStatChange}
              />
              <RollLog
                id={this.state.selectedCharacter._id}
                lastRoll={this.state.rawRoll}
              />
              <div>
                <Dice updateRawRoll={this.updateRawRoll} name="D4" sides="4" />
                <Dice updateRawRoll={this.updateRawRoll} name="D6" sides="6" />
                <Dice updateRawRoll={this.updateRawRoll} name="D8" sides="8" />
                <Dice
                  updateRawRoll={this.updateRawRoll}
                  name="D10"
                  sides="10"
                />
                <Dice
                  updateRawRoll={this.updateRawRoll}
                  name="D12"
                  sides="12"
                />
                <Dice
                  updateRawRoll={this.updateRawRoll}
                  name="D20"
                  sides="20"
                />
                <Dice
                  updateRawRoll={this.updateRawRoll}
                  name="D100"
                  sides="100"
                />
              </div>
              <Total
                total={this.calcTotalRoll()}
                onDiceClick={this.onDiceClick}
              />
              CHOOSE YOUR MODIFIERS
              <RollStats onChooseStat={this.onChooseStat} />
              <Proficiency />
              <Advantage />
            </div>
          ) : (
            <CharacterList
              characters={this.state.characters}
              handleClick={this.onCharacterClick}
            />
          )}
        </div>

        {/* <ProfileBanner />
        <InfoBlock />
        <MainRoller />
        <QuickOptions /> */}
      </div>
    );
  }
}

export default Session;

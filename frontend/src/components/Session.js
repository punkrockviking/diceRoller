import React from "react";
// import ProfileBanner from "./ProfileBanner";
// import InfoBlock from "./InfoBlock";
// import MainRoller from "./MainRoller";
// import QuickOptions from "./QuickOptions";
import CharacterList from "./CharacterList";
import CharacterInfo from "./CharacterInfo";
import Dice from "./Dice";
import Total from "./Total";
import RollStats from "./RollStats";
import Proficiency from "./Proficiency";
import Advantage from "./Advantage";
import RollLog from "./RollLog";
import RollButton from "./RollButton";

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
      selectedDice: 20,
      selectedDiceQty: 1,
      rawRoll: null,
      statMod: {
        stat: '',
        num: null,
      },
      advantage: "",
      proficient: {
        name: "",
        num: null,
      },
      featMod: "",
      rollLog: [],
    };
  }

  // const { selectedCharacter, selectedDice, selectedDiceQty, rawRoll, statMod, advantage, proficient, featMod, rollLog} = this.state

  onStatChange = (event) => {
    console.log(event);
    this.setState({
      selectedCharacter: {
        ...this.state.selectedCharacter,
        [event.target.name]: event.target.valueAsNumber,
      },
    });
  };

  onChooseStat = (statName) => {
    if (this.state.statMod.stat === statName) {
      this.resetStatMod()
    } else {
    this.setState({
      statMod: {
        stat: statName,
        num: Math.floor((this.state.selectedCharacter[statName] - 10) / 2),
      }}, () => console.log("Your stat mod is ", this.state.statMod.num));
    }
  };

  resetStatMod = () => {
    this.setState({
      statMod: {
        stat: '',
        num: null,
      }
    }, () => console.log(this.state.statMod) )
  }

  calcTotalRoll = () => {
    // need to conditionally config rolls
    // nothing helps d100 roll
    // proficiency only helps d20 rolls
    // stat may or may not help d4-d12 rolls
    // etc
    if (this.state.rawRoll) {
      let totalRoll = this.state.rawRoll;
      if (this.state.selectedDice === 20) {
        totalRoll = (totalRoll + this.state.statMod.num + this.state.proficient.num)
        return totalRoll
      } if (this.state.selectedDice === 100) {
        return totalRoll
      } else {
        totalRoll += (this.state.statMod.num)
        return totalRoll
      }
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

  updateSelectedDice = (die) => {
    this.setState({ selectedDice: die });
  };

  updateSelectedDiceQty = (num) => {
    this.setState({ selectedDiceQty: num });
  };

  updateProficient = (profName, profNum) => {
    this.setState({ proficient: {
      name: profName,
      num: profNum,
      } 
    }, console.log(this.state.proficient));
    
  };

  resetProfMod = () => {
    this.setState({
      proficient: {
        name: '',
        num: null,
      }
    }, () => console.log(this.state.proficient))
  }

  updateAdvantage = (val) => {
    this.setState({
      advantage: val,
    }, console.log(this.state.advantage))
  }

  resetAdvantage = () => {
    this.setState({
      advantage: '',
    }, console.log(this.state.advantage))
  }

  updateRollLog = (entries) => {
    console.log(entries)
    this.setState({
      rollLog: entries
    })
  }

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
                updateRollLog={this.updateRollLog}
                log={this.state.rollLog}
                lastRoll={this.state.rawRoll}
              />
              <div>
                <Dice
                  updateSelectedDice={this.updateSelectedDice}
                  updateSelectedDiceQty={this.updateSelectedDiceQty}
                  name="D4"
                  sides="4"
                />
                <Dice
                  updateSelectedDice={this.updateSelectedDice}
                  updateSelectedDiceQty={this.updateSelectedDiceQty}
                  name="D6"
                  sides="6"
                />
                <Dice
                  updateSelectedDice={this.updateSelectedDice}
                  updateSelectedDiceQty={this.updateSelectedDiceQty}
                  name="D8"
                  sides="8"
                />
                <Dice
                  updateSelectedDice={this.updateSelectedDice}
                  updateSelectedDiceQty={this.updateSelectedDiceQty}
                  name="D10"
                  sides="10"
                />
                <Dice
                  updateSelectedDice={this.updateSelectedDice}
                  updateSelectedDiceQty={this.updateSelectedDiceQty}
                  name="D12"
                  sides="12"
                />
                <Dice
                  updateSelectedDice={this.updateSelectedDice}
                  updateSelectedDiceQty={this.updateSelectedDiceQty}
                  name="D20"
                  sides="20"
                />
                <Dice
                  updateSelectedDice={this.updateSelectedDice}
                  updateSelectedDiceQty={this.updateSelectedDiceQty}
                  name="D100"
                  sides="100"
                />
              </div>
              <RollButton
                sides={this.state.selectedDice}
                name={`D${this.state.selectedDice}`}
                qty={this.state.selectedDiceQty}
                updateRawRoll={this.updateRawRoll}
              />
              <Total
                total={this.calcTotalRoll()}
                onDiceClick={this.onDiceClick}
              />
              CHOOSE YOUR MODIFIERS
              <RollStats onChooseStat={this.onChooseStat} selectedStatName={this.state.statMod.stat} resetStatMod={this.resetStatMod} />
              <Proficiency
                level={this.state.selectedCharacter.level}
                update={this.updateProficient}
                reset={this.resetProfMod}
                selectedProf={this.state.proficient}
              />
              <Advantage selectedAdv={this.state.advantage} update={this.updateAdvantage} reset={this.resetAdvantage} />
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

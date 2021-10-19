import React from 'react'
import ProfileBanner from './ProfileBanner'
import InfoBlock from './InfoBlock'
import MainRoller from './MainRoller'
import QuickOptions from './QuickOptions'
import CharacterList from './CharacterList'
import CharacterInfo from './CharacterInfo'



class Session extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            characters: [],
            selectedCharacter: {
                _id: '',
                name: '',
                _profile: {},
                class: '',
                level: null,
                str: null,
                dex: null,
                con: null,
                wis: null,
                int: null,
                chr: null,
                defaultAttack: {}
            }
        }
    }



    componentDidMount = () => {
        fetch(`/session?profileId=${this.props.profile}`)
        .then(response => response.json())
        .then(characters => this.setState(characters))
        // .then(console.log('characters are', this.state.characters))
    }

    onCharacterClick = (event) => {
        event.preventDefault()
        const targetId = event.target.attributes.value.value
        const selectedCharacter = this.state.characters.find(character => character._id === targetId)
        // console.log(event)
        this.setState({selectedCharacter}, console.log('selectedCharacter state updated') )
    }

    // onFormSubmit = () => {
    //     post(`/session?characterId=${this.state.selectedCharacter._id}`)
    
    // }

    render() {
        return (
            <div>
                {/* {this.props.data} */}
                <div>
                    {this.state.selectedCharacter._id ? (
                        // <div>Selected Character is {JSON.stringify(this.state.selectedCharacter)}</div>
                        <CharacterInfo character={this.state.selectedCharacter} />
                    ):(
                        <CharacterList characters={this.state.characters} handleClick={this.onCharacterClick} />
                    )}
                </div>
                
                <ProfileBanner />
                <InfoBlock />
                <MainRoller />
                <QuickOptions />
            </div>
        )
    }
}

export default Session
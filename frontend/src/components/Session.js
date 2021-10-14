import React from 'react'
import ProfileBanner from './ProfileBanner'
import InfoBlock from './InfoBlock'
import MainRoller from './MainRoller'
import QuickOptions from './QuickOptions'
import CharacterList from './CharacterList'


class Session extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            characters: [],
            selectedCharacter: ''
        }
    }

    componentDidMount = () => {
        fetch("/session")
        .then(response => response.json())
        .then(characters => this.setState(characters))
        // .then(console.log('characters are', this.state.characters))
    }

    onCharacterClick = (event) => {
        event.preventDefault()
        // console.log(event)
        this.setState( {selectedCharacter: event.target.attributes.value.value}, console.log('selectedCharacter state updated') )
    }

    // componentDidUpdate = () => {
    //     if (this.state.selectedCharacter !== prevState.selectedCharacter) {
    //         fetch(`/session?characterId=${this.state.selectedCharacter}`)
    //         .then(response => response.json())
    //         .then(sessionCharacter => this.setState({ selectedCharacter }))
    //     }  
    // }

    render() {
        return (
            <div>
                {/* {this.props.data} */}
                <div>
                    {this.state.selectedCharacter ? (
                        <div>Selected Character is {this.state.selectedCharacter}</div>
                    ):(
                        <CharacterList handleClick={this.onCharacterClick} />
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
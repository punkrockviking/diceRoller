import React from 'react'
import ProfileBanner from './ProfileBanner'
import InfoBlock from './InfoBlock'
import MainRoller from './MainRoller'
import QuickOptions from './QuickOptions'


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
        .then(characters => this.setState(characters), console.log(this.state))
    }

    //  const characters = props.data.characters.map((character) => {
    //     return <div>{character}</div>
    // })

    render() {
        return (
            <div>
                {this.props.data}
                <ProfileBanner />
                <InfoBlock />
                <MainRoller />
                <QuickOptions />
            </div>
        )
    }
}

export default Session
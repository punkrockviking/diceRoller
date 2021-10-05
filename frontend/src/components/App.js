import React from 'react'
import Profiles from './Profiles'
import { Button } from './Button.style'
import Session from './Session'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedProfile: '',
            characters: [],
            // selectedCharacter: ''
        }
    }

    onProfileClick = (event) => {
        // console.log(this)
        event.preventDefault()
        // console.log(event)
        this.setState( {selectedProfile: event.target.attributes.value.nodeValue}, console.log(this.state) )
    }

    onCharacterClick = (event) => {
        event.preventDefault()
        this.setState( {selectedCharacter: event.target.attributes.value.nodeValue}, console.log(this.state.selectedCharacter) )
    }

    componentDidUpdate = (prevProp, prevState) => {
        if (this.state.selectedProfile !== prevState.selectedProfile) {
            fetch(`/session?profileId=${this.state.selectedProfile}`)
            .then(response => response.json())
            .then(characters => this.setState({ characters }))
        }   
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <div>
                    <div>App Component</div>
                    {this.state.selectedProfile ? (
                        <Session handleClick={this.onCharacterClick} data={JSON.stringify(this.state)} />
                        // <Session handleClick={this.onCharacterClick} data={JSON.stringify(this.state)} />
                    ):(
                        <Profiles handleClick={this.onProfileClick} />
                    )}
                </div>
                <div>
                    <Button backgroundColor='cyan' >Test Button</Button>
                </div>
            </div>
        )
    }
}

export default App;

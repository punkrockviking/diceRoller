import React from 'react'
import Profiles from './Profiles'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedProfile: '',
            characters: []
        }
    }

    onProfileClick = (event) => {
        // console.log(this)
        event.preventDefault()
        // console.log(event)
        this.setState( {selectedProfile: event.target.attributes.value.nodeValue }, console.log(this.state) )
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
                <div>App Component</div>
                {this.state.selectedProfile ? (
                    <div>{JSON.stringify(this.state)}</div>
                ):(
                    <Profiles handleClick={this.onProfileClick} />
                )}
            </div>
            
        )
    }
}

export default App;

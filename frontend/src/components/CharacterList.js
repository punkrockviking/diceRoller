import React from 'react'

class CharacterList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            characters: [],
        }
    }

    componentDidMount = () => {
        fetch("/session")
        .then(response => response.json())
        .then(characters => this.setState(characters))
        // .then(data => console.log(data))

        // .then(console.log('characters are', this.state.characters))
    }

    render() {
        return (
            <div>
                {this.state.characters.map((character) => (
                    <div key={character._id} value={character._id} onClick={this.props.handleClick} >{character.name}</div>
                ))}
            </div>
        )
    }

}

export default CharacterList
import React from 'react'
import Form from './Form'

class CharacterInfo extends React.Component {

    onStatChange(event) {
        console.log(event)
        //event.target.value
    }

    render() {
        return (
            <div>
                Info for {this.props.character.name} is displayed here!
                <div>
                    <form>
                        <label>
                            STR
                            <input type="number" value={this.props.character.str} onChange={this.onStatChange} />
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default CharacterInfo;


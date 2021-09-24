import React from 'react'


class Profiles extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            profiles: [], 
            selectedProfile: ''
        }
    }


    componentDidMount = () => {
        fetch("/profiles")
        .then(response => response.json())
        .then(profiles => this.setState(profiles))
    }

    

    render() {
        return (
            <div>
                {this.state.profiles.map((profile) => (
                    <div key={profile._id} value={profile._id} onClick={this.props.handleClick} >{profile.name}</div>
                ))}
            </div>
        )
    }
}

export default Profiles;

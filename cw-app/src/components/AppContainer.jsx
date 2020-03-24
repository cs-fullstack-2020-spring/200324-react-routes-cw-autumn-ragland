import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import StarsWarsCharacters from './StarWarsCharacters';
import AddCharacter from './AddCharacter';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCharacter: {}
        }
    }

    addNewCharacter = (newCharacter) => {
        this.setState({ newCharacter: newCharacter })
    }

    render() {
        return (
            <div>
                <h1>Check</h1>
                <Router>
                    <Link className="routeLink" to="/">Home</Link>
                    <Link className="routeLink" to="/characters">Star Wars Characters</Link>
                    <Link className="routeLink" to="/add_character">Add Character</Link>
                    <Route path="/characters"><StarsWarsCharacters newCharacter={this.state.newCharacter} /></Route>
                    <Route path="/add_character"><AddCharacter addNewCharacter={this.addNewCharacter} /></Route>
                </Router>
            </div>
        )
    }
}

export default AppContainer;
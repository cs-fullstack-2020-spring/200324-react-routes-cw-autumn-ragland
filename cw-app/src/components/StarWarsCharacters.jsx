import React, { Component } from 'react';

class StarsWarsCharacters extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            characterList: [], // array to hold json data from fetch
        }
    }
    // lifecycle method to call fetch
    componentDidMount() {
        this.loadData();
    }
    // fetch method
    loadData = async () => {
        // fetch from api
        const response = await fetch('https://swapi.co/api/people/');
        // json only
        const json = await response.json();
        // console.log(json.results); // test
        // update array in state
        this.setState({ characterList: json.results });
        this.addNewCharacter(); // call method to display form submission
    }
    // challenge - method to display form submission
    addNewCharacter = () => {
        // only display submission if the name property of the object passed in state has a value
        if (this.props.newCharacter.name) {
            // create a new object from properties of the object passed from the parent and add it to the beginning of the json array in state
            this.state.characterList.unshift({
                name: this.props.newCharacter.name,
                birth_year: this.props.newCharacter.birth_year,
                gender: this.props.newCharacter.gender
            });
            // set state of array globally
            this.setState({ characterList: this.state.characterList })
        }
    }
    // display list of characters
    render() {
        return (
            this.state.characterList.map((character, index) => {
                return (
                    <div key={index}>
                        <p>Name : {character.name}</p>
                        <p>Birth Year :{character.birth_year}</p>
                        <p>Gender :{character.gender}</p>
                        <hr />
                    </div>
                )
            }
            )
        );
    }
}

export default StarsWarsCharacters;
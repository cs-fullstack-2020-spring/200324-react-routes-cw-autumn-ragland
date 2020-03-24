import React, { Component } from 'react';

class StarsWarsCharacters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characterList: [],
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData = async () => {
        console.log("Fetching Characters!");
        const response = await fetch('https://swapi.co/api/people/');
        const json = await response.json();
        console.table(json.results);
        this.setState({ characterList: json.results });
        this.addNewCharacter();
    }
    addNewCharacter = () => {
        if (this.props.newCharacter.name) {
            this.state.characterList.unshift({
                name: this.props.newCharacter.name,
                birth_year: this.props.newCharacter.birth_year,
                gender: this.props.newCharacter.gender
            });
            console.table(
                {
                    name: this.props.newCharacter.name,
                    birth_year: this.props.newCharacter.birth_year,
                    gender: this.props.newCharacter.gender
                }
            )
            console.log(this.state.characterList)
            this.setState({ characterList: this.state.characterList })
        }
    }
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
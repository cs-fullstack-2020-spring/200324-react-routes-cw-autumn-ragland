import React, { Component } from 'react';

class AddCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            birth_year: "",
            gender: "",
            characterList: []
        }
    }

    handleChange = (event) => {
        if (event.target.name === "name") {
            this.setState({ name: event.target.value })
        } else if (event.target.name === "birth_year") {
            this.setState({ birth_year: event.target.value })
        } else if (event.target.name === "gender") {
            this.setState({ gender: event.target.value })
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();
        this.props.addNewCharacter(this.state)
        this.setState({
            name: "",
            birth_year: "",
            gender: "",
        })
        this.state.characterList.push({
            name: this.state.name,
            birth_year: this.state.birth_year,
            gender: this.state.gender
        });
        this.setState({characterList : this.state.characterList});
    }

    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Add Your Own Star Wars Character!</legend>

                        <div className="formGroup">
                            <label htmlFor="name">Character Name : </label>
                            <input type="text" name="name" id="name"
                                value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="birth_year">Character Birth Year : </label>
                            <input type="text" name="birth_year" id="birth_year"
                                value={this.state.birth_year} onChange={this.handleChange} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="gender">Character Gender : </label>
                            <select id="gender" name="gender"
                                value={this.state.gender} onChange={this.handleChange}>
                                <option value=" ">--</option>
                                <option value="na">NA</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <button onClick={this.handleSubmission}>Add Character</button>

                    </fieldset>
                </form>
                <div>
                    {
                        this.state.characterList.map(character => {
                            return(
                                <div>
                                    <p>Name : {character.name}</p>
                                    <p>Birth Year : {character.birth_year}</p>
                                    <p>Gender : {character.gender}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default AddCharacter;
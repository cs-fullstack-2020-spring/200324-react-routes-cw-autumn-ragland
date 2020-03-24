import React, { Component } from 'react';

class AddCharacter extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            name : "",
            birth_year : "",
            gender : "",
        }
    }

    // one event handler to conditionally update state
    handleChange = (event) => {
        if(event.target.name === "name"){
            this.setState({name : event.target.value})
        } else if(event.target.name === "birth_year") {
            this.setState({birth_year : event.target.value})
        } else if(event.target.name === "gender") {
            this.setState({gender : event.target.value})
        }
    }

    handleSubmission = (event) => {
        event.preventDefault(); // keep page from reloading
        // set state to initial values
        this.props.addNewCharacter(this.state)
        this.setState({
            name : "",
            birth_year : "",
            gender : "",
        })
    }

    // render form
    render() {
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Find Your Dog a Home</legend>

                        <div className="formGroup">
                            <label htmlFor="name">Character Name : </label>
                            <input type="text" name="name" id="name" 
                            value = {this.state.name} onChange = {this.handleChange}/>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="birth_year">Character Birth Year : </label>
                            <input type="text" name="birth_year" id="birth_year" 
                            value = {this.state.birth_year} onChange = {this.handleChange}/>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="gender">Character Gender : </label>
                            <select id="gender" name = "gender" 
                            value = {this.state.gender} onChange = {this.handleChange}>
                                <option value=" ">--</option>
                                <option value="na">NA</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <button onClick = {this.handleSubmission}>Add Character</button>

                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddCharacter;
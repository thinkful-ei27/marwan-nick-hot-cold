import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {

onSubmit(e) {
e.preventDefault();
if(this.props.onAddGuess) {
    const val = this.input.value;
    this.props.onAddGuess(val);
}

this.input.value;

}


render() {
return (
        <form onSubmit = {event => this.onSubmit(event)}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                ref = {input => {this.input = input}}
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}

}

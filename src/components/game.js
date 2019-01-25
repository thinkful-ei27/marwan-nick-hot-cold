import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            feedback: "Make your guess!",
            count: 3,
            guesses: [10, 15, 25],
            answer: 50
        };
    }

    addGuess(input){
        this.setState({
            guesses: [...this.state.guesses, input]
        })
    }

    
    render(){
    return (
        <div>
            <Header />
            <GuessSection feedback={this.state.feedback}
                          handleSubmit = {this.addGuess} />
            <GuessCount count={this.state.count} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
}
}

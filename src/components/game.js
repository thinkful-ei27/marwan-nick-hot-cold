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
            guesses: [10, 15, 25],
            answer: 50
        };
    }

    addGuess(input){
        // if(isNaN(input)){
        //     this.setState({feedback: 'Please enter a valid number'});
        //     return ;

        this.setState({
            guesses: [...this.state.guesses, input]
        })
        }




       
    

    
    render(){
        const {feedback, guesses} = this.state;
        const guessCount = guesses.length
    return (
        <div>
            <Header />
            <main role="main">
            <GuessSection feedback={feedback}
                          guessCount = {guessCount}
                          onAddGuess = {guess => this.addGuess(guess)}/>
            <GuessList guesses={guesses} />
            </main>
        </div>
    );
}
}

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
            guesses: [],
            answer: Math.floor(Math.random() * 100) + 1
        };
    }

    addGuess(input){
        input = parseInt(input,10)
        if(isNaN(input)){
            this.setState({feedback: 'Please enter a valid number'});
            return ;
        } 

        const diff = Math.abs(input - this.state.answer);

        let feedback;

        if(diff >= 50){
            feedback = `You are so cold...`;
        } else if (diff >= 35 ) {
            feedback = `You are Cold...`;
          } else if (diff >= 20) {
            feedback = `You are warm`;
          } else if (diff >= 10 ) {
            feedback = 'You are Hot!';
          } else if (diff >= 5 ) {
            feedback = 'You are so Hot!';
          }else {
            feedback = 'You got it!';
          }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, input]
        });


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
            <GuessCount guessCount={guessCount} />
            </main>
        </div>
    );
}
}

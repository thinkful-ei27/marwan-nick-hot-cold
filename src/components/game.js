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
            count: 1,
            guesses: [],
            answer: Math.floor(Math.random() * 100) + 1,
            rules: false
        };
    }

    resetAll(){
        this.setState({
            feedback: "Make your guess!",
            count: 1,
            guesses: [],
            answer: Math.floor(Math.random() * 100) + 1
        })
    };


    validateNumber(number){
        console.log(number);
        console.log(this.state.guesses);
        let tempArray = [...this.state.guesses];
        tempArray = tempArray.filter(num => Number(number) === Number(num)); 
        console.log(tempArray);
        if(tempArray.length === 1){
            return false;
        } else return true;
    }


    updateFeedback(number, answer, array){
        console.log(this.state.answer);
        if(array.length-1 <= 0){
            return "Make another guess!";
        } else if(number === this.state.answer){
            return "Correct!!!";
        } else if(Math.abs(answer - array[array.length-2]) > Math.abs(answer - number)){
            return "Hotter!";
        } else return "Colder...";
    }

    addGuess(input){
        if(this.validateNumber(input)){
        console.log(input);
        let newNumber = this.state.count + 1;
        let newArray = [...this.state.guesses, Number(input)];
        let answer = this.state.answer;
        this.setState({
            guesses: newArray,
            count: newNumber,
            feedback: this.updateFeedback(Number(input), answer, newArray)
        })} else {
            this.setState({
                feedback: "Can't pick the same number twice!"
            })
        }
    }

    editRules(){
        let notState = !this.state.rules;
        this.setState({
            rules: notState
        });
    }

    returnObjectIfTrue(conditional, object){
        if(conditional){
            return object;
        }
    }
    
    render(){
    return (
        <div>
            <Header handleHelp = {(e) => {this.editRules()}}
                    handleNewGame = {(e) => {this.resetAll()}}
                    rules={this.state.rules}
                    ifTrue={this.returnObjectIfTrue}/>
            <GuessSection feedback={this.state.feedback}
                          handleSubmit = {(e) => {this.addGuess(e)}} />
            <GuessCount count={this.state.count} />
            <GuessList guesses={this.state.guesses} />
        </div>
    );
}
}

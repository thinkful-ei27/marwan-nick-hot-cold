import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount from './guess-count';
import GuessList from './guess-list';
import InfoModal from './info-modal';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: "Make your guess!",
            guesses: [],
            answer: Math.floor(Math.random() * 100) + 1,
            what: false
        };
    }

    handleInfo() {
        this.setState({ what: !this.state.what });

    }
    newGame() {
        this.setState({
            feedback: "Make your guess!",
            guesses: [],
            answer: Math.floor(Math.random() * 100) + 1
        });
    }

    addGuess(input) {
        input = parseInt(input, 10)

        const guessArr = this.state.guesses;
        for (let i = 0; i <= guessArr; i++) {
            if (guessArr[i] === input) {
                alert('You already inserted this guess!');
                return;
            }

        }
        if (isNaN(input)) {
            this.setState({ feedback: 'Please enter a valid number' });
            return;
        }

        const diff = Math.abs(input - this.state.answer);

        let feedback;

        if (diff >= 50) {
            feedback = `You are so cold...`;
        } else if (diff >= 35) {
            feedback = `You are Cold...`;
        } else if (diff >= 20) {
            feedback = `You are warm`;
        } else if (diff >= 10) {
            feedback = 'You are Hot!';
        } else if (diff >= 5) {
            feedback = 'You are so Hot!';
        } else {
            feedback = 'You got it! Start a NEW GAME !';

        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, input]
        });


    }


    render() {

        if (this.state.what) {
            return <InfoModal handleClick={() => this.handleInfo()} />;
        }

        const { feedback, guesses } = this.state;
        const guessCount = guesses.length;

        return (
            <div>
                <Header onNewGame={() => this.newGame()}
                    handleInfo={() => this.handleInfo()} />
                <main id="main" role="main">
                    <GuessSection feedback={feedback}
                        guessCount={guessCount}
                        onAddGuess={guess => this.addGuess(guess)} />
                    <GuessList guesses={guesses} />
                    <GuessCount guessCount={guessCount} />
                </main>
            </div>
        );
    }
}

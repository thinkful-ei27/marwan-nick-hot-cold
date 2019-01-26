import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    const isPlural = props.guessCount !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';
    if (props.guessCount === 0) {
        return (<h2>You haven't made any guess yet!</h2>)
    }

    return (
        <h2 id="guessCount">
            You did <code id="count">{props.guessCount}</code> {guessNoun}!
        </h2>
    );
}

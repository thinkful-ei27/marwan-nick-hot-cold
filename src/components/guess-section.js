import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
    const { feedback, guessCount } = props;
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onAddGuess={guess => props.onAddGuess(guess)} />
        </section>
    );
}


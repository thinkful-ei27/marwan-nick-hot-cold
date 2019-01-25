import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav handleHelp={props.handleHelp}
                    handleNewGame={props.handleNewGame}/>
            {props.ifTrue(props.rules===true, <InfoModal handleHelp={props.handleHelp}/>)}
            <h1>HOT or COLD</h1>
        </header>
    );
};

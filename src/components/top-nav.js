import React from 'react';

import './top-nav.css';

export default function TopNav(props) {
    return (
        <nav>
            <ul className="clearfix">
                <li>
                    <a  className="what" href="#"
                    onClick={() => props.handleInfo()} >

                        What?

                    </a>
                </li>
                <li>
                    <a className="new" href="#" onClick={() => props.onNewGame()}>
                        + New Game
                    </a>
                </li>
            </ul>
        </nav>
    );
}


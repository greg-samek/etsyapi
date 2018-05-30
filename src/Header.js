import React, { Component } from 'react';
import './Header.css';


class Header extends Component {

    render() {
        return(
            <header>
                <h1 className="App-title">I'm looking for </h1>
                <input type="text" placeholder="... artisinal beard oil"/>
            </header>
        )
    }
}

export default Header;

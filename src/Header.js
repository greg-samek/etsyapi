import React, { Component } from 'react';
import './Header.css';


class Header extends Component {

    render() {
        return(
            <header>
                <h1 className="App-title"><img src={`http://${window.location.host}/imperial-mustache-filled.png`} width="50" height="50" alt="mustache"/>&nbsp;search&#8482;</h1>
                <input type="text" placeholder="... artisinal beard oil"/>
            </header>
        )
    }
}

export default Header;

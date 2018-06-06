import React, { Component } from 'react';
import './Error.css';


class Header extends Component {

    render() {
        const {history} = this.props;
        return(
            <p className="search-error">
                Something went wrong. It's not you, it's us. Please try again.
            </p>
        )
    }
}

export default Header;

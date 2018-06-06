import React, { Component } from 'react';
import './Header.css';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {searchText: 'artisinal%20beard%20oil'};

        this.updateSearchText = this.updateSearchText.bind(this);
    }

    updateSearchText(event) {
        this.setState({searchText: encodeURIComponent(event.target.value)})
    }



    render() {
        const {history} = this.props;
        return(
            <div className="top-nav">
                <h1 className="App-title"><img src={`http://${window.location.host}/imperial-mustache-filled.png`} width="50" height="50" alt="mustache"/>&nbsp;search&#8482;</h1>
                <input type="text" placeholder="... artisinal beard oil" onChange={this.updateSearchText} />
                <button
                    type='button'
                    onClick={() => { this.props.history.push(`/search/${this.state.searchText}`) }}
                >
                    Search
                </button>
            </div>
        )
    }
}

export default Header;

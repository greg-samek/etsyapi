import React, { Component } from 'react';
import './SearchResult.css';
import Header from './Header';


class Home extends Component {

    render() {
        const { match: { params } } = this.props;
        return(
            <div>
                <Header/>
                <body>
                <p className="empty-search">You searched for {params.SearchTerms}</p>
                </body>
            </div>
        )
    }
}

export default Home;
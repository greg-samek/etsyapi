import React, { Component } from 'react';
import { ScaleLoader } from 'react-spinners';

import './SearchResult.css';
import Header from './Header';
import ResultCard from './ResultCard';


class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {results: null};
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        const that = this;
        //TODO: as an alternative to JSONP, I'm making a request to a simple node proxy I created.
        fetch(`http://localhost:4000/api?keywords=${params.SearchTerms}`)
            .then(
                (response) => {
                    response.json().then(function(data) {
                        console.log(data);
                        that.setState({results: data.results});
                    });
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    render() {
        const { match: { params } } = this.props;
        const { results } = this.state;
        const searchResults = results ? results.map((result) => {
            return <ResultCard key={result.listing_id} data={result}/>
        }) : <div className="results-loading-spinner"> <ScaleLoader
            color={'#123abc'}
            loading={true}
        /></div>;

        return(
            <div>
                <Header/>
                <div className="search-results">
                    {searchResults}
                </div>
            </div>
        )
    }
}

export default SearchResult;
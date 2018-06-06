import React, { Component } from 'react';
import { ScaleLoader } from 'react-spinners';

import './SearchResult.css';
import Header from './Header';
import ResultCard from './ResultCard';
import Error from './Error';


class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {results: null};
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidUpdate(nextProps, nextState) {
        const { match: { params } } = this.props;
        if(nextProps.match.params.SearchTerms !== params.SearchTerms) {
            this.setState({results: null});
            this.updateSearch();
        }
    }

    componentDidMount() {
        this.updateSearch();
    }


    updateSearch() {
        const { match: { params } } = this.props;
        const that = this;
        //TODO: as an alternative to JSONP, I'm making a request to a simple node proxy I created.
        fetch(`http://localhost:4000/api?keywords=${params.SearchTerms}`)
            .then(
                (response) => {
                    if (!response.ok) throw Error(response.statusText);
                    return response;
                }
            )
            .then(
                (response) => {
                    response.json().then(function(data) {
                        that.setState({results: data.results, error: false});
                    });
                }
            )
            .catch(
                (error) => {
                    that.setState({error: true});
                }
            )
    }


    render() {
        const { match: { params } } = this.props;
        const { results, error } = this.state;
        const searchResults = error ? <Error/> : (results ? results.map((result) => {
            return <ResultCard key={result.listing_id} data={result}/>
        }) : <div className="results-loading-spinner"> <ScaleLoader
            color={'#123abc'}
            loading={true}
        /></div>);

        return(
            <div>
                <Header history={this.props.history}/>
                <div className="search-results">
                    {searchResults}
                </div>
            </div>
        )
    }
}

export default SearchResult;
import React, { Component } from 'react';
import './SearchResult.css';
import Header from './Header';


class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {data: null};
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        //TODO: because of CORS limitations, I'm making a request to a simple node proxy I created.
        const that = this;
        fetch(`http://localhost:4000/api?keywords=${params.SearchTerms}`)
            .then(
                (response) => {
                    response.json().then(function(data) {
                        that.setState({data: data});
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
        return(
            <div>
                <Header/>
                <div>
                <p className="empty-search">You searched for {params.SearchTerms}</p>
                </div>
            </div>
        )
    }
}

export default SearchResult;
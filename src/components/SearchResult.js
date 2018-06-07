import React, { Component } from 'react';
import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './Header';
import ResultCard from './ResultCard';
import { updateSearchTerm, getListings } from '../actionCreators';

const SearchResults = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const ResultsLoadingSpinner = styled.div`
  text-align: center;
`;

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  listings: state.listings
});

const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(value) {
    dispatch(updateSearchTerm(value));
  },
  handleListingsChange(value) {
    dispatch(getListings(value));
  }
});

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidUpdate(prevProps) {
    const {
      listings,
      match: { params }
    } = this.props;
    const prevSearchTerms = prevProps.match.params.SearchTerms;

    if (prevSearchTerms != params.SearchTerms) {
      this.setState({ loading: true }, () => {
        this.props.handleSearchTermChange(params.SearchTerms);
        this.props.handleListingsChange(params.SearchTerms);
      });
    }

    if (prevProps.listings !== listings) {
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    const {
      match: { params },
      searchTerm
    } = this.props;
    if (!searchTerm) {
      // User types in search url directly.
      this.setState({ loading: true }, () => {
        this.props.handleSearchTermChange(params.SearchTerms);
        this.props.handleListingsChange(params.SearchTerms);
      });
    } else {
      this.setState({ loading: true }, () =>
        this.props.handleListingsChange(searchTerm)
      );
    }
  }

  render() {
    const { loading } = this.state;
    const { listings } = this.props;

    const ResultBody = loading ? (
      <ResultsLoadingSpinner>
        {' '}
        <ScaleLoader color={'#123abc'} loading={true} />
      </ResultsLoadingSpinner>
    ) : (
      listings.map(listing => {
        return <ResultCard key={listing.listing_id} data={listing} />;
      })
    );
    return (
      <div>
        <Header history={this.props.history} />
        <SearchResults>{ResultBody}</SearchResults>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);

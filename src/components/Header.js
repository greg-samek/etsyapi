import React, { Component } from 'react';
import styled from 'styled-components';

const TopNav = styled.div`
  background-color: #FFFF;
  height: 150px;
  padding: 20px;
  color: #F3641F;
  text-align: center;
`;

const SearchInput = styled.input`
    padding: 10px 5px;
    border: 2px solid aliceblue;
`;

const SearchButton = styled.button`
    display: inline-block;
    margin-left: 10px;
    font-weight: 700;
`;

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {searchText: 'artisinal%20beard%20oil'};
    }

    updateSearchText = (event) => {
        this.setState({searchText: encodeURIComponent(event.target.value)})
    };

    search = () => {
        const {searchText} = this.state;
        this.props.history.push(`/search/${searchText}`)
    };

    render() {
        return(
            <TopNav>
                <h1 className="App-title"><img src={`http://${window.location.host}/imperial-mustache-filled.png`} width="50" height="50" alt="mustache"/>&nbsp;search&#8482;</h1>
                <SearchInput type="text" placeholder="... artisinal beard oil" onChange={this.updateSearchText} />
                <SearchButton
                    type='button'
                    onClick={() => { this.search() }}
                >
                    Search
                </SearchButton>
            </TopNav>
        );
    }
}

export default Header;

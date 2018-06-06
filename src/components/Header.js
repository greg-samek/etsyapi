import React, { Component } from 'react';
import styled from 'styled-components';

const TopNav = styled.div`
  background-color: #ffff;
  height: 150px;
  padding: 20px;
  color: #f3641f;
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

const LogoMustache = styled.img`
  vertical-align: middle;
  width: 50px;
  height: 50px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: 'mustache%20wax' };
  }

  updateSearchText = event => {
    this.setState({ searchText: encodeURIComponent(event.target.value) });
  };

  search = () => {
    const { searchText } = this.state;
    this.props.history.push(`/search/${searchText}`);
  };

  render() {
    return (
      <TopNav>
        <h1>
          <LogoMustache
            src={`http://${window.location.host}/imperial-mustache-filled.png`}
            alt="Mustache Logo"
          />&nbsp;search&#8482;
        </h1>
        <SearchInput
          type="text"
          placeholder="... mustache wax"
          onChange={this.updateSearchText}
        />
        <SearchButton
          type="button"
          onClick={() => {
            this.search();
          }}
        >
          Search
        </SearchButton>
      </TopNav>
    );
  }
}

export default Header;

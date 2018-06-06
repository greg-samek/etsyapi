import React from 'react';
import styled from 'styled-components';

const SearchError = styled.p`
  text-align: center;
  color: red;
`;

const Error = () => {
    return (
        <SearchError>
            Something went wrong. It's not you, it's us. Please try again.
        </SearchError>
    );
};

export default Error;

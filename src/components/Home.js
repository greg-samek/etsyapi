import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const EmptySearch = styled.p`
    color: #1faef3;
    text-align: center;
    -webkit-margin-before: 0;
`;


const Home = props => {
    return (
        <div>
            <Header history={props.history}/>
            <body>
            <EmptySearch>in search, answers find you will</EmptySearch>
            </body>
        </div>
    )
};


export default Home;

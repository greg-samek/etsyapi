import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  flex-basis: 22%;
  border-top: 2px solid black;
  flex-grow: 1;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ResultCard = props => {
  const { data } = props;
  const Images = data.Images;
  const src = Images && Images[0] ? Images[0].url_170x135 : '';
  return (
    <Card>
      <ProductImage src={src} alt={`${data.title} Product Image `} />
      <h3>{data.title}</h3>
    </Card>
  );
};

export default ResultCard;

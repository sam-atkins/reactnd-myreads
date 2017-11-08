import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <StyledListBooksTitle>
    <StyledListBooksHeader>MyReads</StyledListBooksHeader>
  </StyledListBooksTitle>
);

const StyledListBooksTitle = styled.div`
  padding: 10px 0;
  background: #2e7c31;
  text-align: center;
`;

const StyledListBooksHeader = styled.h1`
  font-weight: 400;
  margin: 0;
  color: white;
`;

export default Header;

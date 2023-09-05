'use client';

import React from 'react';
import { styled } from 'styled-components';

const Home = () => {
  return (
    <StyledContainer>
      <h1>FREEWAY</h1>
    </StyledContainer>
  );
};

export default Home;

const StyledContainer = styled.div`
  max-width: 475px;
  width: 100%;
  margin: 0 auto;

  & > h1 {
    font-size: 40px;
    font-weight: 700;
  }
`;

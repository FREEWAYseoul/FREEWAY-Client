'use client';

import styled from 'styled-components';

const layout = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default layout;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f4f6;
`;

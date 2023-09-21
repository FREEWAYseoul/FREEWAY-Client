'use client';

import styled from 'styled-components';

const layout = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default layout;

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

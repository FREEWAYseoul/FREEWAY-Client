'use client';

import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface Props extends PropsWithChildren {
  width?: number;
  height?: number;
  color?: string;
  handleOnClick?: () => void;
}

const Button = ({ width, height, handleOnClick, children }: Props) => {
  return (
    <StyledButton style={{ width, height }} onClick={handleOnClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;

  border: none;
  background-color: #fff;

  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

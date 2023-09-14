'use client';

import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

interface Props extends PropsWithChildren {
  width?: number;
  height?: number;
  color?: string;
  hover?: boolean;
  handleOnClick?: (arg1: React.MouseEvent<HTMLElement>) => void;
}

const Button = ({ width, height, hover, handleOnClick, children }: Props) => {
  return (
    <StyledButton style={{ width, height }} $isHover={!!hover} onClick={handleOnClick}>
      {children}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ $isHover: boolean }>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  margin: 0;

  border: none;
  background: none;

  ${({ $isHover }) =>
    $isHover &&
    css`
      transition: 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    `}
`;

'use client';

import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  size?: number;
  handleOnClick?: () => void;
} & PropsWithChildren;

const CircleButton = ({ size = 50, handleOnClick, children }: Props) => {
  return (
    <StyledCircleButton $size={size} onClick={handleOnClick}>
      {children}
    </StyledCircleButton>
  );
};

export default CircleButton;

const StyledCircleButton = styled.button<{ $size: number }>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $size }) => css`
    width: ${$size}px;
    height: ${$size}px;
  `}

  border-radius: 50%;
  background-color: #316bff;
  border: none;

  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

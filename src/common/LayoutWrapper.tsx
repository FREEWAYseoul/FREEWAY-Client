'use client';

import { PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren;

const LayoutWrapper = ({ children }: Props) => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default LayoutWrapper;

const Wrapper = styled.div`
  position: relative;

  margin: auto;

  max-width: 475px;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  background-size: contain;
  background-repeat: no-repeat;
`;

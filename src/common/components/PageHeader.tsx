'use client';

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import BackArrowIcon from '@/assets/icons/back-arrow.svg';

type Props = { title: string };

const PageHeader = ({ title }: Props) => {
  const route = useRouter();

  const handleMoveHome = () => {
    route.back();
  };

  return (
    <StyledHeader>
      <button onClick={handleMoveHome}>
        <BackArrowIcon />
      </button>
      <h1>{title}</h1>
    </StyledHeader>
  );
};

export default PageHeader;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;
  background-color: #fff;

  & > h1 {
    margin: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }

  & > button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 7px 0 10px;
    background: none;
    border: none;
  }
`;

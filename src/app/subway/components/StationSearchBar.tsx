import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styled from 'styled-components';

import useStationSearch from '@/app/search/hooks/useStationSearch';
import ChevronIcon from '@/assets/icons/chevron.svg';
import CircleCancelIcon from '@/assets/icons/circle-cancel.svg';
import Button from '@/common/components/button/Button';

type Props = {
  stationName: string;
};

const StationSearchBar = ({ stationName }: Props) => {
  const { resetKeywords } = useStationSearch();
  const route = useRouter();

  const handleMoveHome = () => {
    route.push('/');
  };

  const handleMoveSearch = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target;
    const el = target as HTMLElement;

    if (el.tagName !== 'P') {
      resetKeywords();
    }
    route.push('/search');
  };

  useEffect(() => {
    route.prefetch('/');
    route.prefetch('/search');
  }, [route]);

  return (
    <StyledStationSearchBar>
      <Button handleOnClick={handleMoveHome}>
        <ChevronIcon />
      </Button>
      <p onClick={handleMoveSearch}>{stationName}</p>
      <Button handleOnClick={handleMoveSearch}>
        <CircleCancelIcon />
      </Button>
    </StyledStationSearchBar>
  );
};

export default StationSearchBar;

const StyledStationSearchBar = styled.div`
  position: absolute;
  width: 100%;
  height: 75px;
  top: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 75px;
  background-color: #fff;

  padding-left: 13px;

  z-index: 99;

  & > p {
    display: flex;
    align-items: center;
    cursor: pointer;
    /* padding-top: 2px; */
    padding-left: 11px;
    margin: 0;
    font-size: 18px;
    font-weight: 500;
    line-height: normal;
  }
`;

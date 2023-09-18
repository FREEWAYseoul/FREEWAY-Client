import { useContext } from 'react';
import styled, { css } from 'styled-components';

import { SearchContext } from '@/common/context/SearchContext';
import { StationProps } from '@/types/stationType';

import SearchItem from './SearchItem';

type Props = {
  label?: string;
  data: StationProps[];
  type?: 'homepage' | 'searchpage';
};

const SearchList = ({ label, data, type }: Props) => {
  const { autofillRef, selectedIdx, keyword } = useContext(SearchContext);

  return (
    <>
      {label && <StyledLabel $type={type}>{label}</StyledLabel>}
      <StyledListWrapper ref={autofillRef}>
        {data.map((station, idx) => (
          <SearchItem
            key={station.stationId}
            id={station.stationId}
            name={station.stationName}
            status={station.stationStatus}
            line={String(station.lineId)}
            isFocus={selectedIdx === idx ? true : false}
            type={type}
            keyword={keyword}
          />
        ))}
      </StyledListWrapper>
    </>
  );
};

export default SearchList;

const StyledListWrapper = styled.ul`
  // ul 자체에서 주는 css 무효화
  padding: 0;
  margin: 0;

  width: 100%;
  height: calc(100vh - 200px);

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledLabel = styled.div<{ $type?: 'homepage' | 'searchpage' }>`
  margin-bottom: 15px;

  ${({ $type }) =>
    $type === 'searchpage'
      ? css`
          padding-left: 17px;
          margin-bottom: 0;
          height: 57px;
          border-bottom: 1px solid rgba(217, 217, 217, 0.5);
        `
      : css`
          padding-left: 24px;
        `};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #96a1b2;
  font-weight: 600;
  font-size: 16px;
`;

import styled, { css } from 'styled-components';

import { StationProps } from '@/types/stationType';

import SearchItem from './SearchItem';

type Props = {
  label?: string;
  data: StationProps[];
  type?: 'homepage' | 'searchpage';
};

const SearchList = ({ label, data, type }: Props) => {
  // const { autofillRef, selectedIdx } = useSearchContext();

  return (
    // <StyledListWrapper ref={autofillRef}>
    <>
      {label && <StyledLabel $type={type}>{label}</StyledLabel>}
      <StyledListWrapper>
        {data.map((station) => (
          <SearchItem
            key={station.stationId}
            id={station.stationId}
            name={station.stationName}
            status={station.stationStatus}
            line={String(station.lineId)}
            // isFocus={selectedIdx === idx ? true : false}
            type={type}
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

  overflow-y: hidden;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledLabel = styled.div<{ $type?: 'homepage' | 'searchpage' }>`
  margin-bottom: 15px;

  ${({ $type }) =>
    $type === 'searchpage' &&
    css`
      margin-bottom: 0;
      padding-left: 20px;
      height: 57px;
    `};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: #96a1b2;
  font-weight: 600;
  font-size: 16px;
`;

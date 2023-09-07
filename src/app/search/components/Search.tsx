'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

import useStationSpeech from '@/app/home/hooks/useStationSpeech';
import { useStation } from '@/common/api/stations';

import useSearchBar from '../hooks/useStationSearch';
import ProgressBar from './ProgressBar';
import SearchBar from './SearchBar';
import { useSearchContext } from './SearchContext';
import SearchLoading from './SearchLoading';

const Search = () => {
  const { keywords, setFilteredStations } = useSearchContext();
  const { getFilteredStations, focusOnSearchInput, convertKeywordsToContent } = useSearchBar();
  const { data, isLoading } = useStation();
  const { startListening, endListening, listening } = useStationSpeech();

  const content = convertKeywordsToContent(keywords, listening);

  const handleClick = () => {
    if (listening) {
      endListening();
    } else {
      startListening();
    }
  };

  useEffect(() => {
    if (keywords) {
      const filteredStations = getFilteredStations(keywords);
      setFilteredStations(filteredStations);
    }

    focusOnSearchInput();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keywords, data]);

  return (
    <SearchWrapper id='search-container'>
      <SearchBar
        placeholder='역이름을 입력해주세요.'
        listeningMessage='역이름을 말해주세요.'
        handleClick={handleClick}
        isListening={listening}
      />
      <DropdownBox>
        {isLoading ? (
          <SkeletonWrapper>
            <ProgressBar />
            <SearchLoading />
          </SkeletonWrapper>
        ) : (
          <>{content}</>
        )}
      </DropdownBox>
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f4f6;
`;

const DropdownBox = styled.div`
  margin-top: 15px;
  max-height: 50%;
  width: 100%;
`;

const SkeletonWrapper = styled.div`
  margin-top: -15px;
`;

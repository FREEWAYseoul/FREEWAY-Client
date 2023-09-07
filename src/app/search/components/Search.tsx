'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

import useStationSpeech from '@/app/home/hooks/useStationSpeech';
import { useStation } from '@/common/api/stations';

import useSearchBar from '../hooks/useStationSearch';
import ProgressBar from './ProgressBar';
import SearchBar from './SearchBar';
import SearchContents from './SearchContents';
import { useSearchContext } from './SearchContext';
import SearchLoading from './SearchLoading';

const Search = () => {
  const { keywords, setFilteredStations } = useSearchContext();
  const { getFilteredStations, focusOnSearchInput } = useSearchBar();
  const { data, isLoading } = useStation();
  const { startListening, endListening, listening } = useStationSpeech();

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
  }, [keywords, data, focusOnSearchInput, getFilteredStations, setFilteredStations]);

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
          <>
            <ProgressBar />
            <SearchLoading />
          </>
        ) : (
          <SearchContents keywords='' isListening={listening} />
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
  max-height: 50%;
  width: 100%;
`;

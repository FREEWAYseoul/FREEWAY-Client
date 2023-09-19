'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

import useSearchBar from '@/app/search/hooks/useStationSearch';
import { useStation } from '@/common/api/stations';

import ProgressBar from '../../../common/components/ProgressBar';
import SearchBar from './SearchBar';
import SearchContents from './SearchContents';
import SearchLoading from './SearchLoading';

const Search = () => {
  const { focusOnSearchInput } = useSearchBar();
  const { isLoading } = useStation();

  useEffect(() => {
    focusOnSearchInput();
  }, [focusOnSearchInput]);

  return (
    <SearchWrapper id='search-container'>
      <SearchBar />
      <DropdownBox>
        {isLoading ? (
          <>
            <ProgressBar />
            <SearchLoading />
          </>
        ) : (
          <SearchContents />
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

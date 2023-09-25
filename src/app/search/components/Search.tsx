'use client';

import { useEffect } from 'react';

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
    <>
      <SearchBar />
      {isLoading ? (
        <>
          <ProgressBar />
          <SearchLoading />
        </>
      ) : (
        <SearchContents />
      )}
    </>
  );
};

export default Search;

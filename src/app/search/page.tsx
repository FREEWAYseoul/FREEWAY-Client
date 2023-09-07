import React from 'react';

import Search from './components/Search';
import { SearchContextProvider } from './components/SearchContext';

const page = () => {
  return (
    <>
      <SearchContextProvider>
        <Search />
      </SearchContextProvider>
    </>
  );
};

export default page;

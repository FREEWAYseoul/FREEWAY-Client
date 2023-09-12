'use client';

import { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

import { StationProps } from '@/types/stationType';

type SearchState = {
  keyword: string;
  selectedStationId: number;
  filteredStations: StationProps[];
  // selectedIdx: number;
  // autofillRef: RefObject<HTMLUListElement>;
};

type SearchAction = {
  // setSelectedIdx: Dispatch<SetStateAction<number>>;
  setSelectedStationId: Dispatch<SetStateAction<number>>;
  setKeyword: Dispatch<SetStateAction<string>>;
  setFilteredStations: Dispatch<SetStateAction<StationProps[] | []>>;
};

type SearchContext = SearchState & SearchAction;

export const SearchContext = createContext<SearchContext>({
  keyword: '',
  selectedStationId: 70,
  filteredStations: [],
  setKeyword: () => {},
  setSelectedStationId: () => {},
  setFilteredStations: () => {},
});

const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const [keyword, setKeyword] = useState<string>('');
  const [selectedStationId, setSelectedStationId] = useState<number>(70);
  const [filteredStations, setFilteredStations] = useState<StationProps[] | []>([]);
  // const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  // const autofillRef = useRef<HTMLUListElement>(null);

  return (
    <SearchContext.Provider
      value={{
        keyword,
        selectedStationId,
        filteredStations,
        setKeyword,
        setSelectedStationId,
        setFilteredStations,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

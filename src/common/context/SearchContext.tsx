'use client';

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import useAutocomplete from '@/app/search/hooks/useAutocomplete';
import { StationProps } from '@/types/stationType';

import { useStation } from '../api/stations';

type SearchState = {
  keyword: string;
  selectedStationId: number;
  stations?: StationProps[];
  filteredStations: StationProps[];
  selectedIdx: number;
  autofillRef?: RefObject<HTMLUListElement>;
};

type SearchAction = {
  setSelectedStationId: Dispatch<SetStateAction<number>>;
  setKeyword: Dispatch<SetStateAction<string>>;
  setFilteredStations: Dispatch<SetStateAction<StationProps[] | []>>;
  setSelectedIdx: Dispatch<SetStateAction<number>>;
};

type SearchContext = SearchState & SearchAction;

export const SearchContext = createContext<SearchContext>({
  keyword: '',
  selectedStationId: 70,
  stations: [],
  filteredStations: [],
  setKeyword: () => {},
  setSelectedStationId: () => {},
  setFilteredStations: () => {},
  selectedIdx: -1,
  setSelectedIdx: () => {},
});

const SearchContextProvider = ({ children }: PropsWithChildren) => {
  const { data: stations } = useStation();
  const { autocomplete } = useAutocomplete();
  const [keyword, setKeyword] = useState<string>('');

  const [selectedStationId, setSelectedStationId] = useState<number>(70);
  const [filteredStations, setFilteredStations] = useState<StationProps[] | []>([]);
  const [selectedIdx, setSelectedIdx] = useState<number>(-1);
  const autofillRef = useRef<HTMLUListElement>(null);

  // 함수 설명: 서버에서 받아온 데이터 중 keywords를 포함하는 데이터만 골라 반환하는 함수.
  // 실행되는 곳: Search 페이지 useEffect시
  const stationsFilter = useCallback(
    (keyword: string) => {
      const character = keyword.replace(/역$/, '').trim();
      const wordsStartingWithKeywords = autocomplete.searchPrefix(character);
      const filterStations = stations?.filter((station: StationProps) =>
        wordsStartingWithKeywords.includes(station.stationName),
      );

      return filterStations ?? [];
    },
    [autocomplete, stations],
  );

  useEffect(() => {
    if (keyword) {
      const data = stationsFilter(keyword);
      setFilteredStations(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <SearchContext.Provider
      value={{
        keyword,
        autofillRef,
        selectedStationId,
        stations,
        filteredStations,
        setKeyword,
        setSelectedStationId,
        setFilteredStations,
        selectedIdx,
        setSelectedIdx,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

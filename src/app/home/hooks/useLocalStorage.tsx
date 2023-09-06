import { useCallback } from 'react';

import { StationProps } from '@/types/stationType';

// import { useSearchContext } from '../components/domain/Search/SearchContext';

const SEARCH_HISTORY = 'search-history';

const useLocalStorage = () => {
  // const { setSearchHistory } = useSearchContext();
  const removeDuplication = (selectedStationInfo: StationProps, data: StationProps[]) => {
    return data.filter((station) => station.stationId !== selectedStationInfo.stationId);
  };

  const addSearchHistory = useCallback((selectedStationInfo: StationProps) => {
    if (!selectedStationInfo || selectedStationInfo == undefined) {
      return;
    }
    const data = JSON.parse(localStorage.getItem(SEARCH_HISTORY) ?? '[]');
    const dataWithoutDuplication = removeDuplication(selectedStationInfo, data);
    const newData = [...dataWithoutDuplication, selectedStationInfo];
    localStorage.setItem(SEARCH_HISTORY, JSON.stringify(newData));
  }, []);

  const displaySearchHistoryInOrder = useCallback(() => {
    // setSearchHistory(
    //   JSON.parse(localStorage.getItem('최근 검색') ?? '[]')
    //     .slice(-4)
    //     .reverse(),
    // );
  }, []);

  return { addSearchHistory, displaySearchHistoryInOrder };
};

export default useLocalStorage;

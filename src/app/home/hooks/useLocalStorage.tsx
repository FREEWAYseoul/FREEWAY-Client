import { useCallback, useEffect, useState } from 'react';

import { StationProps } from '@/types/stationType';

const SEARCH_HISTORY = 'search-history';

const useLocalStorage = () => {
  const [searchHistory, setSearchHistory] = useState<StationProps[]>([]);

  const sliceList = (data: StationProps[]) => {
    return data.slice(-4);
  };

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

    localStorage.setItem(SEARCH_HISTORY, JSON.stringify(sliceList(newData)));
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(SEARCH_HISTORY) ?? '[]');
    setSearchHistory(sliceList(data).reverse());
  }, []);

  return { searchHistory, addSearchHistory };
};

export default useLocalStorage;

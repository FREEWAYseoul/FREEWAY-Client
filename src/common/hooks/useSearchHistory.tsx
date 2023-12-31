import { useCallback, useEffect, useState } from 'react';

import { StationProps } from '@/types/stationType';

const SEARCH_HISTORY = 'search-history';

const useLocalStorage = () => {
  const [searchHistory, setSearchHistory] = useState<StationProps[]>([]);

  const sliceList = (data: StationProps[]) => {
    return data.slice(0, 4);
  };

  const removeDuplication = (station: StationProps, data: StationProps[]) => {
    return data.filter((item) => item.stationId !== station.stationId);
  };

  const addSearchHistory = useCallback((station: StationProps) => {
    if (!station || station == undefined) {
      return;
    }
    const data = JSON.parse(localStorage.getItem(SEARCH_HISTORY) ?? '[]');
    const dataWithoutDuplication = removeDuplication(station, data);
    const newData = [...dataWithoutDuplication, station];

    localStorage.setItem(SEARCH_HISTORY, JSON.stringify(newData));
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(SEARCH_HISTORY) ?? '[]');
    setSearchHistory(data.reverse());
  }, []);

  return { searchHistory, sliceList, addSearchHistory };
};

export default useLocalStorage;

import { useCallback, useContext } from 'react';

import useLocalStorage from '@/common/hooks/useSearchHistory';

import { SearchContext } from '../../../common/context/SearchContext';

const useStationSearch = () => {
  const { keyword, stations, filteredStations, setKeyword, setSelectedStationId } =
    useContext(SearchContext);
  const { addSearchHistory } = useLocalStorage();

  // 실행되는 곳: 모든 페이지 검색 input onChange시
  const handleTyping = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword],
  );

  // 함수 설명: 클릭 or submit된 역 정보를 저장(로컬과 리액트내)
  const saveStation = useCallback(
    (selectedStationId: string) => {
      const station = stations?.find((item) => item.stationId == selectedStationId);
      if (station) {
        setSelectedStationId(Number(selectedStationId));
        setKeyword(station.stationName);
        addSearchHistory(station);
      }
    },
    [stations, setSelectedStationId, setKeyword, addSearchHistory],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      if (keyword.length > 0 || !filteredStations.length) {
        e.preventDefault();
        alert('역이름을 다시 한 번 확인해주세요!');
        return;
      } else {
        e.preventDefault();
        const selectedStation = filteredStations.find(
          (item) => item.stationName === keyword.replace(/역$/, '').trim(),
        );
        setSelectedStationId(Number(selectedStation?.stationId));
      }
    },
    [filteredStations, setSelectedStationId, keyword],
  );

  const focusOnSearchInput = useCallback(() => {
    const el: HTMLInputElement | null = document.querySelector('#search-bar');
    if (el) el.focus();
  }, []);

  const resetKeywords = () => {
    setKeyword('');
  };

  return {
    handleTyping,
    handleSubmit,
    saveStation,
    resetKeywords,
    focusOnSearchInput,
  };
};

export default useStationSearch;

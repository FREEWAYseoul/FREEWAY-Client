import { useCallback, useContext } from 'react';

import { useStation } from '@/common/api/stations';
import { StationProps } from '@/types/stationType';

import { SearchContext } from '../../../common/context/SearchContext';
import useAutocomplete from './useAutocomplete';

const useStationSearch = () => {
  const { keyword, filteredStations, setKeyword, setSelectedStationId } = useContext(SearchContext);
  const { data } = useStation();
  const { autocomplete } = useAutocomplete();

  // 실행되는 곳: 모든 페이지 검색 input onChange시
  const handleTyping = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword],
  );

  // 함수 설명: 서버에서 받아온 데이터 중 keywords를 포함하는 데이터만 골라 반환하는 함수.
  // 실행되는 곳: Search 페이지 useEffect시
  const stationsFilter = useCallback(
    (keyword: string) => {
      const character = keyword.replace(/역$/, '').trim();
      const wordsStartingWithKeywords = autocomplete.searchPrefix(character);
      const filteredStations = data?.filter((station: StationProps) =>
        wordsStartingWithKeywords.includes(station.stationName),
      );

      return filteredStations ?? [];
    },
    [autocomplete, data],
  );

  // 함수 설명: 키워드를 포함하는 데이터 or 로컬 데이터 중 dropdownbox에서 선택한 것과 같은 데이터만 반환하는 함수
  // const selectStationById = useCallback(
  //   (id: string) => {
  //     const selectedStation = filteredStations.filter((station) => station.stationId == id).at(-1);
  //     return selectedStation;
  //   },
  //   [filteredStations],
  // );

  // 함수 설명: 클릭 or submit된 역 정보를 저장(로컬과 리액트내)
  const saveStation = useCallback(
    (selectedStationId: string) => {
      const station = data?.find((item) => item.stationId == selectedStationId);
      if (station) {
        setSelectedStationId(Number(selectedStationId));
        setKeyword(station.stationName);
        // addSearchHistory(station);
      }
    },
    [data, setKeyword, setSelectedStationId],
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
    // selectStationById,
    saveStation,
    resetKeywords,
    focusOnSearchInput,
    stationsFilter,
  };
};

export default useStationSearch;

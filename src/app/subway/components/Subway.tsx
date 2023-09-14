'use client';

import { useContext } from 'react';

import { useStationInfo } from '@/common/api/stations';
import { SearchContext } from '@/common/context/SearchContext';
import StationContextProvider from '@/common/context/StationContext';

import BottomSheet from './bottomSheet/BottomSheet';
import ContentsView from './ContentsView';
import NaverMapScriptLoader from './map/NaverMapScriptLoader';
import StationSearchBar from './StationSearchBar';

const Subway = () => {
  const { selectedStationId } = useContext(SearchContext);
  const { data: station } = useStationInfo(selectedStationId);

  return (
    <NaverMapScriptLoader>
      {station && (
        <StationContextProvider initStation={station}>
          <StationSearchBar station={station} />
          <ContentsView />
          <BottomSheet />
        </StationContextProvider>
      )}
    </NaverMapScriptLoader>
  );
};

export default Subway;

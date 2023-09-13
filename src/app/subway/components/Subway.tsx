'use client';

import { useContext } from 'react';

import { useStationInfo } from '@/common/api/stations';
import { SearchContext } from '@/common/context/SearchContext';
import StationContextProvider from '@/common/context/StationContext';

import Mapview from './map/Mapview';
import NaverMapScriptLoader from './map/NaverMapScriptLoader';

const Subway = () => {
  const { selectedStationId } = useContext(SearchContext);
  const { data: station } = useStationInfo(selectedStationId);

  return (
    <NaverMapScriptLoader>
      {station && (
        <StationContextProvider initStation={station}>
          <Mapview />
          SearchId : {selectedStationId}
        </StationContextProvider>
      )}
    </NaverMapScriptLoader>
  );
};

export default Subway;

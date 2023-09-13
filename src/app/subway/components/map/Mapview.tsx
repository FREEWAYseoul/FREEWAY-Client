import { useContext } from 'react';
import styled from 'styled-components';

import { StationContext } from '@/common/context/StationContext';

import DynamicMap from './DynamicMap';
// import MapMarkerController from './MapMarkerController';

const Mapview = () => {
  const context = useContext(StationContext);

  if (!context) {
    return <></>;
  }

  const { station } = context;

  return (
    <MapWrapper>
      <DynamicMap coordinate={station.stationCoordinate}>
        {/* <MapMarkerController /> */}
      </DynamicMap>
    </MapWrapper>
  );
};

export default Mapview;

const MapWrapper = styled.div`
  flex: 1;
  width: 100%;
  min-height: 300px;
  z-index: 0;
`;

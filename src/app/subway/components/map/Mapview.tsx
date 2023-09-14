import styled from 'styled-components';

import { useStationContext } from '@/common/context/StationContext';

import DynamicMap from './DynamicMap';
import MapMarkerController from './MapMarkerController';
// import MapMarkerController from './MapMarkerController';

const Mapview = () => {
  const { station } = useStationContext();

  return (
    <MapWrapper>
      <DynamicMap coordinate={station.stationCoordinate}>
        <MapMarkerController />
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

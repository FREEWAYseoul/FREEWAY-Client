import { useStationContext } from '@/common/context/StationContext';

import FacilitiesView from './bottomSheet/FacilitiesView';
import MapDetailView from './bottomSheet/MapDetailView';
import Mapview from './map/Mapview';

const ContentsView = () => {
  const { station, activeTab, tabPosition } = useStationContext();

  return (
    <>
      <Mapview />
      {activeTab === '역사지도' && (
        <MapDetailView src={station.stationImageUrl} tabPosition={tabPosition} />
      )}
      {activeTab === '편의시설' && <FacilitiesView facilities={station.facilities} />}
    </>
  );
};

export default ContentsView;

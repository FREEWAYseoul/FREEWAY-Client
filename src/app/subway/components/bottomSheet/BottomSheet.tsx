import styled from 'styled-components';

import { useStationContext } from '@/common/context/StationContext';

import StationButtonGroup from './StationButtonGroup';
import StationHeader from './StationHeader';
import StationMap from './StationMap';

const BottomSheet = () => {
  const { station, isShow, tabPosition, handleTouchStart, handleTouchMove, handleTouchEnd } =
    useStationContext();

  return (
    <StyledBottomSheet
      $isShow={isShow}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ transform: `translate3d(0,${tabPosition}px,0)` }}
    >
      <StationHeader />
      <Divider />
      <StationMap title={station.stationName} line={station.lineId} />
      <StationButtonGroup />
    </StyledBottomSheet>
  );
};

export default BottomSheet;

const StyledBottomSheet = styled.div<{ $isShow: boolean }>`
  position: absolute;
  display: ${({ $isShow }) => ($isShow ? 'flex' : 'none')};
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-height: 235px;
  min-height: 235px;
  border-radius: 20px 20px 0 0;
  background-color: #fff;
  z-index: 99;
  transition: all 0.3s;
  box-shadow: 0px 0px 13.3333px rgba(68, 81, 69, 0.1);
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #d9d9d9;
  opacity: 0.5;
`;

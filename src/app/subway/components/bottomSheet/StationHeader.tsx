import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useStation } from '@/common/api/stations';
import { useStationContext } from '@/common/context/StationContext';
import { StationProps } from '@/types/stationType';

import Badge from '../Badge';

interface BadgeProps {
  lineId: string | number;
  stationId: string | number;
}

const StationHeader = () => {
  const { station, handleChangeStation } = useStationContext();
  const { data: stationData, isLoading } = useStation();
  const [badges, setBadges] = useState<BadgeProps[]>([]);

  useEffect(() => {
    if (!isLoading) {
      const filterStation = stationData?.filter(
        (item: StationProps) => item.stationName === station.stationName,
      );
      const sortStation =
        filterStation?.sort((a: StationProps, b: StationProps) =>
          String(a.lineId).localeCompare(String(b.lineId)),
        ) ?? [];

      setBadges(
        sortStation.map((item: StationProps) => ({
          lineId: item.lineId,
          stationId: item.stationId,
        })),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [station, isLoading]);

  return (
    <StyledStationInfoHeader>
      <div className='sliceBar'>
        <div className='bar' />
      </div>
      <div className='badgeBox'>
        {badges.length > 0 &&
          badges.map((item) => (
            <Badge
              key={item.lineId}
              lineId={item.lineId}
              isActive={station.lineId == item.lineId}
              handleOnClick={() => handleChangeStation(item.stationId)}
            />
          ))}
      </div>
    </StyledStationInfoHeader>
  );
};

export default StationHeader;

const StyledStationInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 11px 16px;

  & > .sliceBar {
    cursor: ns-resize;
    width: 100%;
    padding: 6px 0px 3px 8px;
    height: 13px;

    & > .bar {
      margin: 0 auto;
      width: 15%;
      height: 100%;
      border-radius: 4px;
      background-color: #989898;
    }
  }

  & > .badgeBox {
    display: flex;
    align-items: center;
    gap: 9px;
    width: 100%;
  }
`;

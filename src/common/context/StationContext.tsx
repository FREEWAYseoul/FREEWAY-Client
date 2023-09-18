import { createContext, useContext, useEffect, useState } from 'react';

import { useStationInfo } from '@/common/api/stations';
// import { SLIDER_RANGE } from '@/common/constants/slide';
import { StationDetailProps } from '@/types/stationType';

interface ResultContextProviderProps {
  children: React.ReactNode;
  initStation: StationDetailProps;
}

export interface ReactContextValueProps {
  station: StationDetailProps;
  activeTab: string;
  isShow: boolean;
  // isTabPostion: boolean;
  // isDragging: boolean;
  // tabPosition: number;
  handleChangeTab: (arg1: string) => void;
  handleChangeStation: (arg1: string | number) => void;
  // handleShowInfo: (arg1: boolean) => void;
  // handleShowController: (arg1: boolean) => void;
  // handleTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void;
  // handleTouchMove: (event: React.TouchEvent<HTMLDivElement>) => void;
  // handleTouchEnd: () => void;
}

const StationContext = createContext<ReactContextValueProps | null>(null);

const StationContextProvider = ({ children, initStation }: ResultContextProviderProps) => {
  const [station, setStation] = useState<StationDetailProps>(initStation);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('엘리베이터');
  const [stationId, setStationId] = useState<number>(Number(initStation.stationId));
  const { data, isLoading } = useStationInfo(stationId);

  const handleChangeTab = (title: string) => {
    setActiveTab(title);
  };

  const handleShowController = (flag: boolean) => {
    setIsShow(flag);
  };

  const handleChangeStation = async (stationId: number | string) => {
    setStationId(Number(stationId));
  };

  useEffect(() => {
    if (!isLoading && data) {
      setStation(data);
      // setIsTabPosition(false);
      // setTabPosition(SLIDER_RANGE.min);
    }
  }, [isLoading, data]);

  const contextValue = {
    station,
    activeTab,
    isShow,
    handleChangeTab,
    handleChangeStation,
    handleShowController,
  };

  return <StationContext.Provider value={contextValue}>{children}</StationContext.Provider>;
};

export const useStationContext = () => {
  const context = useContext(StationContext);
  if (!context) {
    throw new Error('no context');
  }

  return context;
};

export default StationContextProvider;

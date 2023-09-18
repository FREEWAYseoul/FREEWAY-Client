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
  isDrag: boolean;
  handleChangeTab: (arg1: string) => void;
  handleChangeStation: (arg1: string | number) => void;
  handleShowController: (arg1: boolean) => void;
  handleCloseInfo: () => void;
}

const StationContext = createContext<ReactContextValueProps | null>(null);

const StationContextProvider = ({ children, initStation }: ResultContextProviderProps) => {
  const [station, setStation] = useState<StationDetailProps>(initStation);
  const [isShow, setIsShow] = useState<boolean>(true);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('엘리베이터');
  const [stationId, setStationId] = useState<number>(Number(initStation.stationId));
  const { data, isLoading } = useStationInfo(stationId);

  const handleChangeTab = (title: string) => {
    setActiveTab(title);
  };

  const handleShowController = (flag: boolean) => {
    setIsDrag(!flag);
  };

  const handleChangeStation = async (stationId: number | string) => {
    setStationId(Number(stationId));
  };

  const handleCloseInfo = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (!isLoading && data) {
      setStation(data);
      setIsDrag(false);
      setIsShow(true);
    }
  }, [isLoading, data]);

  const contextValue = {
    station,
    activeTab,
    isShow,
    isDrag,
    handleChangeTab,
    handleChangeStation,
    handleShowController,
    handleCloseInfo,
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

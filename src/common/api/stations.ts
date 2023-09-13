import { useQuery } from '@tanstack/react-query';

import { StationDetailProps, StationProps } from '@/types/stationType';
import http from '@/utils/http';

export type Coordinate = {
  latitude: string;
  longitude: string;
};

const fetchStations = async () => {
  try {
    const res = await http.get<StationProps[]>('/api/stations');
    return res?.data;
  } catch (error) {
    throw error;
  }
};

export const useStation = () => {
  return useQuery(['stations'], () => fetchStations(), {
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: Infinity,
  });
};

const fetchStationInfo = async (stationId: string | number) => {
  const res = await http.get<StationDetailProps>(`/api/stations/${stationId}`);
  return res?.data;
};

export const useStationInfo = (stationId: number) => {
  return useQuery(['stationsInfo', stationId], () => fetchStationInfo(stationId), {});
};

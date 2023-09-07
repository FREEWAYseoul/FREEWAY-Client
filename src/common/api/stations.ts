import { useQuery } from '@tanstack/react-query';

import { StationDetailProps, StationProps } from '@/types/stationType';
import http from '@/utils/http';

export type Coordinate = {
  latitude: string;
  longitude: string;
};

const fetchStations = async () => {
  const res = await http.get<StationProps[]>('/api/stations');
  return res.data;
};

export const useStation = () => {
  return useQuery(['stations'], () => fetchStations(), {
    refetchOnWindowFocus: false,
    retry: 0,
    staleTime: Infinity,
    // enabled: !!keywords,
    // select: (data) =>{ data.filter(0, 10)},
    // onSuccess: (data) => console.log(data),
    onError: (e: Error) => console.log(e.message),
  });
};

const fetchStationInfo = async (stationId: string | number) => {
  try {
    const res = await http.get<StationDetailProps>(`/api/stations/${stationId}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const useStationInfo = (stationId: number) => {
  return useQuery(['stationsInfo', stationId], () => fetchStationInfo(stationId), {
    onError: (e: Error) => console.log(e.message),
  });
};

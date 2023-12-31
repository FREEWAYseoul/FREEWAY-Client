import { useQuery } from '@tanstack/react-query';

import { SafetyAlertProps } from '@/types/alertType';
import http from '@/utils/http';

const getNotificationData = async () => {
  const res = await http.get<SafetyAlertProps[]>('/api/notifications');
  return res?.data ?? [];
};

export const useNotifications = () => {
  return useQuery<SafetyAlertProps[]>(['notifications'], getNotificationData, {
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60 * 5,
  });
};

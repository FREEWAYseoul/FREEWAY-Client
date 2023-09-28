import { useCallback, useEffect, useState } from 'react';

import { useNotifications } from '@/common/api/notification';
import { NOTIFICATION_HISTORY } from '@/common/constants/localstorage';
import { SafetyAlertProps } from '@/types/alertType';

const useNotification = () => {
  const { data: notifications, isLoading } = useNotifications();
  const [newNotifications, setNewNotifications] = useState<SafetyAlertProps[]>([]);

  const filterNotification = useCallback((data: SafetyAlertProps[], id: number) => {
    const newNotification = data.map((item) => {
      const newNoti = item.notifications.map((noti) => {
        return { ...noti, isNew: noti.id > id };
      });
      return { ...item, notifications: newNoti };
    });

    return newNotification;
  }, []);

  useEffect(() => {
    if (notifications && notifications.length > 0) {
      const readNotificationId = Number(localStorage.getItem(NOTIFICATION_HISTORY) ?? 0);
      const data = filterNotification(notifications, readNotificationId);
      setNewNotifications(data);
      localStorage.setItem(NOTIFICATION_HISTORY, String(notifications[0].notifications[0].id));
    }
  }, [filterNotification, notifications]);

  return { newNotifications, isLoading };
};

export default useNotification;

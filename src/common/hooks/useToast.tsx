import { useEffect, useRef, useState } from 'react';

import { SafetyAlertProps } from '@/types/alertType';
import { nowDateFormat } from '@/utils/format';

import { useNotification } from '../api/notification';

const TOAST_TIMER = 4000;
const NOTIFICATION_HISTORY = 'notification-history';

const useToast = () => {
  const { data: notifications, isLoading } = useNotification();
  const toastMessage = useRef<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isNewNoti, setIsNewNoti] = useState<boolean>(false);

  /**
   * 읽지않은 알림
   */
  const checkNewNotification = (data?: SafetyAlertProps[]) => {
    const readNotificationId = Number(localStorage.getItem(NOTIFICATION_HISTORY) ?? 0);

    if (data) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].notifications.length; j++) {
          if (data[i].notifications[j].id > readNotificationId) {
            return true;
          }
        }
      }
    }
    return false;
  };

  /**
   * 현재날짜와 알림의 날짜가 같은 경우 message
   */
  const newToastMessage = (data?: SafetyAlertProps[]) => {
    if (data) {
      const recentNotification = data[0];
      const nowDate = nowDateFormat();
      if (recentNotification.date === `${nowDate.year}-${nowDate.month}-${nowDate.date}`) {
        return recentNotification.notifications[0].content;
      }
    }
    return '';
  };

  /**
   * toast message fade out
   */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, TOAST_TIMER);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isLoading) {
      const isNewNotification = checkNewNotification(notifications);
      if (isNewNotification) {
        const message = newToastMessage(notifications);
        if (message) {
          toastMessage.current = message;
          setIsOpen(true);
        }
        setIsNewNoti(true);
      }
    }
  }, [isLoading, notifications]);

  return { message: toastMessage.current, isOpen, isNewNoti };
};

export default useToast;

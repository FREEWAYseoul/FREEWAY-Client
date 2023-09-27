import { useEffect, useRef, useState } from 'react';

import { SafetyAlertProps } from '@/types/alertType';
import { nowDateFormat } from '@/utils/format';

import { useNotification } from '../api/notification';

const TOAST_TIMER = 4000;

const useToast = () => {
  const { data: notifications, isLoading } = useNotification();
  const toastMessage = useRef<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

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

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, TOAST_TIMER);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isLoading) {
      const message = newToastMessage(notifications);
      if (message) {
        toastMessage.current = message;
        setIsOpen(true);
      }
    }
  }, [isLoading, notifications]);

  return { message: toastMessage.current, isOpen };
};

export default useToast;

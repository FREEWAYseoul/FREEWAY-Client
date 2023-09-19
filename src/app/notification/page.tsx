import { SafetyAlertProps } from '@/types/alertType';

import Notification from './components/Notification';

const getNotificationData = async (): Promise<SafetyAlertProps[]> => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(BASE_URL + '/api/notifications');
  return res.json();
};

const page = async () => {
  const data = await getNotificationData();

  return (
    <>
      <Notification notifications={data} />
    </>
  );
};

export default page;

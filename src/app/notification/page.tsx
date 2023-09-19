import { SafetyAlertProps } from '@/types/alertType';

import Notification from './components/Notification';

const getNotificationData = async (): Promise<SafetyAlertProps[]> => {
  const res = await fetch('http://localhost:3000/api/notifications');
  return res.json();
};

const page = async () => {
  const data = await getNotificationData();

  return <Notification notifications={data} />;
};

export default page;

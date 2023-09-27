'use client';

import { useNotification } from '@/common/api/notification';
import PageHeader from '@/common/components/PageHeader';
import ProgressBar from '@/common/components/ProgressBar';

import SafetyContents from './SafetyContents';

const Notification = () => {
  const { data: notifications, isLoading } = useNotification();

  return (
    <>
      <PageHeader title='알림' />
      {!isLoading ? <SafetyContents notifications={notifications} /> : <ProgressBar />}
    </>
  );
};

export default Notification;

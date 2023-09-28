'use client';

import PageHeader from '@/common/components/PageHeader';
import ProgressBar from '@/common/components/ProgressBar';

import useNotification from '../hooks/useNotification';
import SafetyContents from './SafetyContents';

const Notification = () => {
  const { newNotifications, isLoading } = useNotification();

  return (
    <>
      <PageHeader title='알림' />
      {!isLoading ? <SafetyContents notifications={newNotifications} /> : <ProgressBar />}
    </>
  );
};

export default Notification;

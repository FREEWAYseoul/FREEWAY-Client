import React, { Suspense } from 'react';

import PageHeader from '@/common/components/PageHeader';
import ProgressBar from '@/common/components/ProgressBar';

import SafetyContents from './SafetyContents';

const Notification = () => {
  return (
    <>
      <PageHeader title='알림' />
      <Suspense fallback={<ProgressBar />}>
        <SafetyContents />
      </Suspense>
    </>
  );
};

export default Notification;

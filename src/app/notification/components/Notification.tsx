import React from 'react';

import PageHeader from '@/common/components/PageHeader';
import { SafetyAlertProps } from '@/types/alertType';

import SafetyContents from './SafetyContents';

type Props = {
  notifications: SafetyAlertProps[];
};

const Notification = ({ notifications }: Props) => {
  return (
    <>
      <PageHeader title='알림' />
      <SafetyContents notifications={notifications} />
    </>
  );
};

export default Notification;

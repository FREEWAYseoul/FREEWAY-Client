'use client';

import React from 'react';
import styled from 'styled-components';

import PageHeader from '@/common/components/PageHeader';
import { SafetyAlertProps } from '@/types/alertType';

import SafetyContents from './SafetyContents';

type Props = {
  notifications: SafetyAlertProps[];
};

const Notification = ({ notifications }: Props) => {
  return (
    <StyledContainer>
      <PageHeader title='알림' />
      <SafetyContents notifications={notifications} />
    </StyledContainer>
  );
};

export default Notification;

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

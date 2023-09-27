'use client';

import styled from 'styled-components';

import { useNotification } from '@/common/api/notification';

import { SafetyAlertProps } from '../../../types/alertType';
import SafetyAlertBox from './SafetyAlertBox';

const SafetyContents = () => {
  const { data: notifications } = useNotification();

  return (
    <StyledContents>
      {notifications &&
        notifications.map((info: SafetyAlertProps, idx) => (
          <SafetyAlertBox key={idx} info={info} />
        ))}
    </StyledContents>
  );
};

export default SafetyContents;

const StyledContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: calc(100% - 50px);
  padding-bottom: 80px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

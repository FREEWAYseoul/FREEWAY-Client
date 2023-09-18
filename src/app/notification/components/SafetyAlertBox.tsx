import styled from 'styled-components';

import { SafetyAlertItemProps, SafetyAlertProps } from '@/types/alertType';
import { dateFormat } from '@/utils/format';

import AlertItem from './AlertItem';

const SafetyAlertBox = ({ info }: { info: SafetyAlertProps }) => {
  return (
    <StyledSafetyAlrertBox>
      <StyledAlertBoxDate>{dateFormat(info.date)}</StyledAlertBoxDate>
      {info.notifications.map((item: SafetyAlertItemProps, idx) => (
        <AlertItem key={idx + item.time} info={item} />
      ))}
    </StyledSafetyAlrertBox>
  );
};

export default SafetyAlertBox;

const StyledSafetyAlrertBox = styled.div`
  padding: 0 20px;
`;

const StyledAlertBoxDate = styled.h1`
  position: -webkit-sticky;
  position: sticky;
  top: -1px;

  padding: 20px 0 15px;
  margin-bottom: 10px;
  height: 40px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;

  color: rgba(0, 0, 0, 0.5);
  font-size: 1rem;
  font-weight: 500;

  z-index: 20;
`;

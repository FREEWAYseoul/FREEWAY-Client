import styled from 'styled-components';

import { SafetyAlertItemProps, SafetyAlertProps } from '@/types/alertType';
import { dateFormat } from '@/utils/format';

import AlertItem from './AlertItem';

const SafetyAlertBox = ({ info }: { info: SafetyAlertProps }) => {
  return (
    <StyledSafetyAlrertBox>
      <h1>{dateFormat(info.date)}</h1>
      {info.notifications.map((item: SafetyAlertItemProps, idx) => (
        <AlertItem key={idx + item.time} info={item} />
      ))}
    </StyledSafetyAlrertBox>
  );
};

export default SafetyAlertBox;

const StyledSafetyAlrertBox = styled.div`
  padding: 0 20px;

  & > h1 {
    display: flex;
    align-items: center;
    margin: 0;
    height: 40px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    font-weight: 500;
    border-bottom: 1px solid #d9d9d9;
  }
`;

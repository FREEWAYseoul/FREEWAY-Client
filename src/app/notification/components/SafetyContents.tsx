import styled from 'styled-components';

import { SafetyAlertProps } from '../../../types/alertType';
import SafetyAlertBox from './SafetyAlertBox';

type Props = {
  notifications: SafetyAlertProps[];
};

const SafetyContents = ({ notifications }: Props) => {
  return (
    <StyledContents>
      {notifications.map((info: SafetyAlertProps, idx) => (
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

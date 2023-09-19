import styled from 'styled-components';

import { SafetyAlertItemProps } from '@/types/alertType';
import { timeFormat } from '@/utils/format';

const AlertItem = ({ info }: { info: SafetyAlertItemProps }) => {
  return (
    <StyledAlertItem>
      <span>{timeFormat(info.time)}</span>
      <h2>{info.summary}</h2>
      <p>{info.content}</p>
    </StyledAlertItem>
  );
};

export default AlertItem;

const StyledAlertItem = styled.div`
  padding-bottom: 20px;
  color: #434343;
  font-size: 1rem;
  line-height: 24px;

  & > span {
    color: #808080;
    font-weight: 300;
  }

  & > h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
  }

  & > p {
    margin: 0;
    font-weight: 300;
  }
`;

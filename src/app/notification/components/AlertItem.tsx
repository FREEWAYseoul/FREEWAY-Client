'use client';

import styled from 'styled-components';

import { SafetyAlertItemProps } from '@/types/alertType';
import { timeFormat } from '@/utils/format';

interface Props {
  info: SafetyAlertItemProps;
  isNew: boolean;
}

const AlertItem = ({ info, isNew }: Props) => {
  return (
    <>
      {isNew ? (
        <StyledNewAlertItem>
          <span>{timeFormat(info.time)}</span>
          <h2>{info.summary}</h2>
          <p>{info.content}</p>
        </StyledNewAlertItem>
      ) : (
        <StyledAlertItem>
          <span>{timeFormat(info.time)}</span>
          <h2>{info.summary}</h2>
          <p>{info.content}</p>
        </StyledAlertItem>
      )}
    </>
  );
};

export default AlertItem;

const StyledNewAlertItem = styled.div`
  padding-bottom: 20px;
  padding-left: 22px;
  color: #434343;
  font-size: 1rem;
  line-height: 24px;

  & > span {
    position: relative;
    color: #e44b52;
    font-weight: 300;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -21px;

      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #e44b52;

      transform: translateY(-50%);
    }
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

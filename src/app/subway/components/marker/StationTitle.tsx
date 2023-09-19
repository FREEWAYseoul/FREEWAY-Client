import styled, { css } from 'styled-components';

import { StationTitleProps } from '@/types/stationType';
import { titleEclipse } from '@/utils/format';

import Badge from '../Badge';

const StationTitle = ({ line, title, color, type }: StationTitleProps) => {
  return (
    <StyledStationTitleWrapper $color={color} $type={type || ''}>
      <Badge lineId={line} isActive={true} />
      {type !== 'marker' ? titleEclipse(title, 6) : title + '역'}
    </StyledStationTitleWrapper>
  );
};

export default StationTitle;

const StyledStationTitleWrapper = styled.div<{ $color: string; $type: string }>`
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  border-radius: 30px;
  border: 3px solid ${({ $color }) => $color};
  background-color: #fff;

  transform: translateX(-50%);
  line-height: 19px;
  white-space: nowrap;

  z-index: 99;
  ${({ $type }) => {
    return $type === 'marker'
      ? css`
          padding: 7px 9px 7px 6px;
        `
      : css`
          padding: 5px 9px 5px 6px;
          min-width: 120px;
        `;
  }}
`;

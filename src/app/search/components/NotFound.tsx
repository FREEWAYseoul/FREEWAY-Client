import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import NotFoundIcon from '@/assets/icons/not-found.svg';
import SkeletonText from '@/common/components/skeleton/SkeletonText';

const NotFound = ({ children }: PropsWithChildren) => {
  return (
    <Wrapper id='not-found'>
      <IconWrapper>
        <NotFoundIcon />
      </IconWrapper>
      <SkeletonText fontSize='20px'>{children}</SkeletonText>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

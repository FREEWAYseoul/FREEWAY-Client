'use client';

import styled from 'styled-components';

import PageHeader from '@/common/components/PageHeader';

import IframeView from '../components/IframeView';

const page = () => {
  return (
    <StyledContainer>
      <PageHeader title='설정' />
      <IframeView />
    </StyledContainer>
  );
};

export default page;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f2f4f6;
`;

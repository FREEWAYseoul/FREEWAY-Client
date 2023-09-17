'use client';

import styled from 'styled-components';

import PageHeader from '@/common/components/PageHeader';

import SettingTabList from './SettingTabList';

const Setting = () => {
  return (
    <StyledContainer>
      <PageHeader title='설정' />
      <SettingTabList />
    </StyledContainer>
  );
};

export default Setting;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f2f4f6;
`;

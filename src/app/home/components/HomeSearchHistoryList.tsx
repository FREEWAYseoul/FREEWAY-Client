import React from 'react';
import styled from 'styled-components';

import SearchList from '@/common/components/search/SearchList';
import { StationProps } from '@/types/stationType';

type Props = {
  searchHistory: StationProps[];
};

const HomeSearchHistoryList = ({ searchHistory }: Props) => {
  let content = null;
  if (searchHistory.length) {
    content = <SearchList label='최근 검색' type='homepage' data={searchHistory} />;
  } else {
    content = <HomeNotFoundBox>최근 검색어가 없습니다.</HomeNotFoundBox>;
  }

  return <StyledHomeSearchListWrapper>{content}</StyledHomeSearchListWrapper>;
};

export default HomeSearchHistoryList;

const StyledHomeSearchListWrapper = styled.div`
  width: 100%;
  max-height: 220px;
  width: 100%;
`;

const HomeNotFoundBox = styled.div`
  width: calc(100% - 40px);
  min-height: 206px;
  margin: 0 auto;

  background-color: #f2f4f6;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: rgba(0, 0, 0, 0.5);
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
`;

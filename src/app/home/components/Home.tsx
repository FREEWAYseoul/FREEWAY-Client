'use client';

import { useEffect } from 'react';
import styled from 'styled-components';

import useStationSearch from '@/app/search/hooks/useStationSearch';
import useLocalStorage from '@/common/hooks/useSearchHistory';
import useSpeech from '@/common/hooks/useStationSpeech';

import VoiceSearchField from '../../../common/components/search/VoiceSearchField';
import HomeHeader from './HomeHeader';
import HomePageTitle from './HomePageTitle';
import HomeSearchBar from './HomeSearchBar';
import HomeSearchHistoryList from './HomeSearchHistoryList';

const Home = () => {
  const { resetKeywords } = useStationSearch();
  const { searchKeyword, handleSpeech, listening } = useSpeech();
  const { searchHistory, sliceList } = useLocalStorage();

  useEffect(() => {
    resetKeywords();
  }, [resetKeywords]);

  return (
    <StyledContainer>
      <HomeWrapper>
        <HomeHeader />
        <HomePageTitle />
        <HomeSearchBar handleClick={handleSpeech} isListening={listening} />
      </HomeWrapper>
      <ChildrenWrapper>
        {listening ? (
          <VoiceSearchField speachKeyword={searchKeyword} />
        ) : (
          <HomeSearchHistoryList searchHistory={sliceList(searchHistory)} />
        )}
      </ChildrenWrapper>
    </StyledContainer>
  );
};

export default Home;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const HomeWrapper = styled.div`
  padding: 0 20px;
`;

const ChildrenWrapper = styled.div`
  padding-top: 74px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

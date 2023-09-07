'use client';

import styled from 'styled-components';

import VoiceSearchField from '../../../common/components/search/VoiceSearchField';
import useLocalStorage from '../hooks/useLocalStorage';
import useSpeech from '../hooks/useStationSpeech';
import HomeHeader from './HomeHeader';
import HomePageTitle from './HomePageTitle';
import HomeSearchBar from './HomeSearchBar';
import HomeSearchHistoryList from './HomeSearchHistoryList';

const Home = () => {
  const { keywords, startListening, endListening, listening } = useSpeech();
  const { searchHistory } = useLocalStorage();
  // const { displaySearchHistoryInOrder } = useLocalStorage();

  const handleClick = () => {
    if (listening) {
      endListening();
    } else {
      startListening();
    }
  };

  // useEffect(() => {
  //   displaySearchHistoryInOrder();
  // }, [displaySearchHistoryInOrder]);

  return (
    <HomeWrapper id='home-container'>
      <HomeHeader />
      <HomePageTitle />
      <HomeSearchBar handleClick={handleClick} isListening={listening} />
      <ChildrenWrapper>
        {listening ? (
          <VoiceSearchField keywords={keywords} />
        ) : (
          <HomeSearchHistoryList searchHistory={searchHistory} />
        )}
      </ChildrenWrapper>
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 24px;
`;

const ChildrenWrapper = styled.div`
  padding-top: 74px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

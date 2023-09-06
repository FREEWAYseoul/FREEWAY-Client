'use client';

import styled from 'styled-components';

import useSpeech from '../hooks/useSpeech';
// import useLocalStorage from '../../../hooks/useLocalStorage';
// import useMic from '../../../hooks/useMic';
import HomeHeader from './HomeHeader';
import HomePageTitle from './HomePageTitle';
import HomeSearchBar from './HomeSearchBar';
import HomeSearchHistoryList from './HomeSearchHistoryList';
import VoiceSearchField from './VoiceSearchField';

const Home = () => {
  const { keywords, startListening, endListening, listening } = useSpeech();
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
      <HomeSearchBar handleClick={handleClick} isListening={false} />
      <ChildrenWrapper>
        {listening ? <VoiceSearchField keywords={keywords} /> : <HomeSearchHistoryList />}
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

import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import MicIcon from '@/assets/icons/mic-icon.svg';
import SoundWaveIcon from '@/assets/icons/sound-wave.svg';
import CircleButton from '@/common/components/button/CircleButton';

type Props = {
  handleClick: () => void;
  isListening: boolean;
};

const HomeSearchBar = ({ handleClick, isListening }: Props) => {
  const route = useRouter();

  return (
    <Wrapper>
      <StyledHomeSearchBar>
        <TypingSearchSection onClick={() => route.push('/search')}>
          역이름을 입력해주세요.
        </TypingSearchSection>
        <VoiceSearchSection id='mic'>
          <CircleButton handleOnClick={handleClick} size={50}>
            {isListening ? (
              <SoundWaveIcon style={{ color: '#fff' }} />
            ) : (
              <MicIcon style={{ color: '#fff' }} />
            )}
          </CircleButton>
        </VoiceSearchSection>
      </StyledHomeSearchBar>
    </Wrapper>
  );
};

export default HomeSearchBar;

const Wrapper = styled.div`
  padding-top: 35px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const StyledHomeSearchBar = styled.div`
  width: 100%;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;

  background: #ffffff;
  border: 1.5px solid #316bff;
  box-shadow: 0px 0px 13.3333px rgba(68, 81, 69, 0.1);
  border-radius: 80px;
`;

const TypingSearchSection = styled.section`
  grid: 1;

  padding-top: 2px;
  padding-left: 27px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-decoration: none;
  outline: none;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #434343;
  opacity: 0.5;
  &:hover,
  &:active {
    color: #316bff;
    cursor: text;
  }
`;

const VoiceSearchSection = styled.div`
  grid: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

import { useRouter } from 'next/navigation';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';

import useStationSearch from '@/app/search/hooks/useStationSearch';
import ChevronIcon from '@/assets/icons/chevron.svg';
import MicIcon from '@/assets/icons/mic-icon.svg';
import SoundWaveIcon from '@/assets/icons/sound-wave.svg';
import Button from '@/common/components/button/Button';
import { SearchContext } from '@/common/context/SearchContext';
import useInput from '@/common/hooks/useInput';
import useStationSpeech from '@/common/hooks/useStationSpeech';

const SearchBar = () => {
  const { keyword } = useContext(SearchContext);
  const { inputRef, changeInputDisabled } = useInput();
  const { listening, handleSpeech } = useStationSpeech();
  const { handleSubmit, handleTyping } = useStationSearch();

  const route = useRouter();

  const handleGoBack = () => {
    route.push('/');
  };

  useEffect(() => {
    changeInputDisabled(listening);
  }, [changeInputDisabled, listening]);

  return (
    <>
      <StyledSearchBarWrapper>
        <Button handleOnClick={handleGoBack}>
          <ChevronIcon />
        </Button>
        <StyledSearchForm onSubmit={handleSubmit}>
          <StyledSearchBarInput
            id='search-bar'
            value={keyword || ''}
            type='text'
            placeholder={listening ? '역이름을 말해주세요.' : '역이름을 입력해주세요.'}
            onChange={handleTyping}
            ref={inputRef}
          />
        </StyledSearchForm>
        <Button handleOnClick={handleSpeech}>
          {listening ? (
            <SoundWaveIcon style={{ color: '#316BFF' }} />
          ) : (
            <MicIcon style={{ color: '#316BFF' }} />
          )}
        </Button>
      </StyledSearchBarWrapper>
    </>
  );
};

export default SearchBar;

const StyledSearchBarWrapper = styled.div`
  width: 100%;
  height: 75px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-columns: 36px minmax(0, 1fr) 75px;
  background-color: #fff;

  padding-left: 13px;

  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
`;

const StyledSearchForm = styled.form`
  margin: auto 0;
`;

const StyledSearchBarInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: none;
  outline: none;
  padding-left: 11px;

  font-size: 18px;
  font-weight: 500;

  &::placeholder {
    color: rgba(150, 161, 178, 0.5);
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

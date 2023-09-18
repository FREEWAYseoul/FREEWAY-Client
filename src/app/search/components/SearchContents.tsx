import React, { useContext } from 'react';

import SearchList from '@/common/components/search/SearchList';
import VoiceSearchField from '@/common/components/search/VoiceSearchField';
import { SearchContext } from '@/common/context/SearchContext';
import useLocalStorage from '@/common/hooks/useSearchHistory';
import useStationSpeech from '@/common/hooks/useStationSpeech';

import NotFound from './NotFound';

const SearchContents = () => {
  const { keyword, filteredStations } = useContext(SearchContext);
  const { searchHistory } = useLocalStorage();
  const { searchKeyword, listening } = useStationSpeech();

  if (!listening) {
    if (keyword) {
      if (filteredStations.length > 0) {
        return <SearchList data={filteredStations} />;
      } else {
        return <NotFound>"{keyword}" 검색 결과가 없습니다.</NotFound>;
      }
    } else {
      return <SearchList label='최근 검색' type={'searchpage'} data={searchHistory} />;
    }
  } else {
    return <VoiceSearchField speachKeyword={searchKeyword} />;
  }
};

export default SearchContents;

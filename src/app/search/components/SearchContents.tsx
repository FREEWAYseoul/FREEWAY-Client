import React from 'react';

import useLocalStorage from '@/app/home/hooks/useLocalStorage';
import SearchList from '@/common/components/search/SearchList';
import VoiceSearchField from '@/common/components/search/VoiceSearchField';

type Props = {
  keywords: string;
  isListening: boolean;
};

const SearchContents = ({ keywords, isListening }: Props) => {
  const { searchHistory } = useLocalStorage();

  if (!isListening) {
    // if (keywords) {
    //   if (!filteredStations.length) {
    //     content = <NotFound>"{keywords}" 검색 결과가 없습니다.</NotFound>;
    //   } else {
    //     content = <SearchList data={filteredStations} />;
    //   }
    // } else if (!keywords && searchHistory.length > 0) {
    return <SearchList label='최근 기록' type={'searchpage'} data={searchHistory} />;
    // }

    // return <></>;
  } else {
    return <VoiceSearchField keywords={keywords} />;
  }
};

export default SearchContents;

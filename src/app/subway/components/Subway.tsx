'use client';

import { useContext } from 'react';

import { SearchContext } from '@/common/context/SearchContext';

const Subway = () => {
  const { selectedStationId } = useContext(SearchContext);

  return <div>SearchId : {selectedStationId}</div>;
};

export default Subway;

'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

import SearchContextProvider from '@/common/context/SearchContext';

const Provider = ({ children }: PropsWithChildren) => {
  /**
   * instance가 변경되어 cache유지되지 않아 state로 관리
   */
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <SearchContextProvider>{children}</SearchContextProvider>
    </QueryClientProvider>
  );
};

export default Provider;

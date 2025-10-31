import React, { FC, PropsWithChildren } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useRefetchOnAppFocus } from '@/common/hooks/useRefecthOnAppFocus';

const queryClient = new QueryClient();

const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  useRefetchOnAppFocus();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { QueryProvider };

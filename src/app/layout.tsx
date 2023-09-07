import { Metadata } from 'next';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

import LayoutWrapper from '../common/LayoutWrapper';
import GlobalStyle from '../styles/global';
import QueryProvider from './QueryProvider';
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'FREEWAY',
  description: 'FREEWAY',
};

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <body className={Pretendard.className}>
        <QueryProvider>
          <StyledComponentsRegistry>
            <LayoutWrapper>
              <GlobalStyle />
              {children}
            </LayoutWrapper>
          </StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}

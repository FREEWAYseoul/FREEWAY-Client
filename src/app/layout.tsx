import { Metadata } from 'next';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

import LayoutWrapper from '../common/LayoutWrapper';
import GlobalStyle from '../styles/global';
import Provider from './Provider';
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
      <head>
        <link rel='icon' href='/logo.svg' />
      </head>
      <body className={Pretendard.className}>
        <Provider>
          <StyledComponentsRegistry>
            <LayoutWrapper>
              <GlobalStyle />
              {children}
            </LayoutWrapper>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}

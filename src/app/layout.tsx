import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import LayoutWrapper from '../common/LayoutWrapper';
import GlobalStyle from '../styles/global';
import Provider from './Provider';
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: 'FREEWAY',
  description: 'FREEWAY',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <link rel='icon' href='/logo.svg' />
      </head>
      <body>
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

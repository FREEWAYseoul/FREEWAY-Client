import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import META_DATA from '@/common/constants/meatadata';

import LayoutWrapper from '../common/LayoutWrapper';
import GlobalStyle from '../styles/global';
import Provider from './Provider';
import StyledComponentsRegistry from './registry';

export const metadata: Metadata = {
  title: META_DATA.title,
  description: META_DATA.description,
  openGraph: {
    type: META_DATA.type,
    title: META_DATA.title,
    description: META_DATA.description,
    url: META_DATA.url,
    images: META_DATA.images,
    locale: META_DATA.locale,
  },
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

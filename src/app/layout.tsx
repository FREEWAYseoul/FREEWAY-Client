import { Metadata } from 'next';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

import META_DATA from '@/common/constants/meatadata';

import LayoutWrapper from '../common/LayoutWrapper';
import GlobalStyle from '../styles/global';
import Ga from './Ga';
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

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html>
      <head>
        <link rel='icon' href='/logo.svg' />
        <meta
          name='google-site-verification'
          content='tsWZ_rEgdfy0DcIZITB3qRExNdPtoBcIXOPavJQQ9Sk'
        />
        <Ga />
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

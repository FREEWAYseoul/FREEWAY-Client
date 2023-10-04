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
        {/* favicon logo */}
        <link rel='apple-touch-icon' sizes='57x57' href='/favicon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/favicon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/favicon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/favicon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/favicon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/favicon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/favicon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/favicon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon-180x180.png' />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicon-192x192.png' />
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/favicon-144x144.png' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        {/* google search console */}
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

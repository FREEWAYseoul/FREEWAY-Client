import { Metadata } from 'next';
import localFont from 'next/font/local';

import LayoutWrapper from '../common/LayoutWrapper';
import StyledComponentsRegistry from '../lib/registry';
import GlobalStyle from '../styles/global';

export const metadata: Metadata = {
  title: 'FREEWAY',
  description: 'FREEWAY',
};

const Pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className={Pretendard.className}>
        <StyledComponentsRegistry>
          <LayoutWrapper>
            <GlobalStyle />
            {children}
          </LayoutWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

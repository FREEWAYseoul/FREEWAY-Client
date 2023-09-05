import { Metadata } from 'next';
import localFont from 'next/font/local';

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
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/PretendardVariable.woff2');
  }

  *{
    font-family: Pretendard;
    box-sizing: border-box;
  }

  html,
  body {
    overflow: hidden;
    font-style: normal;
    overscroll-behavior: none;
  }


`;

export default GlobalStyle;

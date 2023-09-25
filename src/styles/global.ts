'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}

  *{
    box-sizing: border-box;
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  
  html,
  body {
    overflow: hidden;
    font-style: normal;
    overscroll-behavior: none;

  }


`;

export default GlobalStyle;

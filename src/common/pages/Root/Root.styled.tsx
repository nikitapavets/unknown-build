import styledNormalize from 'styled-normalize';
import fonts from '@common/theme/fonts';
import { createGlobalStyle } from '@common/theme/styled-components';

export const GlobalStyle = createGlobalStyle`
  ${fonts};
  ${styledNormalize};

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    line-height: 1.6;

    color: ${(props) => props.theme.textColor};

    font-size: ${(props) => props.theme.textFontSize};
    font-family: ${(props) => props.theme.textFontFamily};
    background-image: url("${require('@assets/images/ocean.jpeg')}");
    background-size: cover;
  }

  input,
  select {
    border-radius: 0;
    appearance: none !important;
  }

  svg {
    fill: ${(props) => props.theme.textColor};

    display: inherit;

    width: 16px;
    height: 16px;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${(props) => props.theme.textColor};
  }
`;

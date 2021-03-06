import * as styledComponents from 'styled-components';
import { ServerStyleSheet, ThemedStyledComponentsModule } from 'styled-components';

import { ThemeInterface } from '@common/theme/theme';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

const sizes = {
  mobile: 321,
  tablet: 426,
  desktop: 769,
  large: 1441,
  xlarge: 1921,
};

const media = (Object.keys(sizes) as (keyof typeof sizes)[]).reduce((acc, label) => {
  acc[label] = (first: any, ...interpolations: any[]) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(first, ...interpolations)}
    }
  `;

  return acc;
}, {} as { [key in keyof typeof sizes]: styledComponents.ThemedCssFunction<ThemeInterface> });

enum FontFaceExts {
  eot = 'eot',
  woff = 'woff',
  woff2 = 'woff2',
  ttf = 'ttf',
  otf = 'otf',
}

const fontFace = (
  name: string,
  src: string,
  weight = 'normal',
  style = 'normal',
  exts: FontFaceExts[] = [FontFaceExts.ttf]
) => {
  const formats = {
    eot: 'eot',
    woff: 'woff',
    woff2: 'woff2',
    ttf: 'truetype',
    otf: 'opentype',
  };

  const includes = exts
    .map((ext) => {
      const url = `url(${require(`@assets/fonts/${src}.${ext}`)})`;
      const format = formats[ext] ? `format("${formats[ext]}")` : '';

      return `${url} ${format}`;
    })
    .join(',');

  return `
    @font-face{
      font-family: "${name}";
      src: ${includes};
      font-weight: ${weight};
      font-style: ${style};
    }
`;
};

const icon = ({
  size,
  color,
  height,
  width,
}: {
  size?: string;
  color?: string;
  height?: string;
  width?: string;
}) => css`
  svg {
    display: inherit;
    width: ${width || size};
    height: ${height || size};
    min-width: ${width || size};
    min-height: ${height || size};

    &,
    use {
      fill: ${color};
    }
  }
`;

export { css, createGlobalStyle, keyframes, ServerStyleSheet, ThemeProvider, media, sizes, fontFace, icon };
export default styled;

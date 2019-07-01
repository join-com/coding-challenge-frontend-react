import { css } from 'styled-components';

export const sizes = {
  desktopFull: 1920,
  desktopWide: 1440,
  desktop: 1280,
  tablet: 768,
  mobile: 320,
};

const getWindowWidth = () => window.innerWidth;

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  acc[`${label}Retina`] = (...args) => css`
    @media (min-width: ${sizes[label]}px) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
      ${css(...args)}
    }
  `;
  acc[`${label}Landscape`] = (...args) => css`
    @media (min-width: ${sizes[label]}px) and (orientation: landscape) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const isMobile = () => {
  const width = getWindowWidth();
  return width < sizes.tablet;
};

export const isTablet = () => {
  const width = getWindowWidth();
  return width >= sizes.tablet && width < sizes.desktop;
};

export const isDesktop = () => {
  const width = getWindowWidth();
  return width >= sizes.desktop;
};

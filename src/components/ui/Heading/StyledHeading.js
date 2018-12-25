import React from "react";
import styled, { css } from "styled-components";
import { colors, fonts, fontSizes } from "../../../constants/styles";

const titles = {
  h1: css`
    font-size: ${fontSizes.extraLarge}rem;
    margin-bottom: ${fontSizes.extraLarge / 2}rem;
  `,

  h2: css`
    font-size: ${fontSizes.large * 1.2}rem;
    margin-bottom: ${(fontSizes.large * 1.2) / 2}rem;
  `,
  h3: css`
    font-size: ${fontSizes.large}rem;
    margin-bottom: ${fontSizes.large / 2}rem;
  `,
  h4: css`
    font-size: ${fontSizes.normal * 1.5}rem;
    margin-bottom: ${(fontSizes.normal * 1.5) / 2}rem;
  `,
  h5: css`
    font-size: ${fontSizes.normal * 1.2}rem;
    margin-bottom: ${(fontSizes.normal * 1.2) / 2}rem;
  `
};

export default styled(({ children, level, ...props }) => React.createElement(`h${level}`, props, children))`
  font-family: ${fonts.primary};
  font-weight: ${({ bold }) => (bold ? "bold" : 500)};
  line-height: 1.3;
  color: ${colors.dark};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  ${({ level }) => titles[`h${level}`]};
`;

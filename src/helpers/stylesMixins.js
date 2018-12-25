import { css } from "styled-components";
import { colors, fonts, fontSizes, defaultIndent } from "../constants/styles";

export const defaultBorder = css`
  border: solid 2px ${colors.dark};
  border-radius: 3px;
`;

export const hoverBorderStyles = css`
  border-color: ${colors.primary};
`;

export const defaultInputStyles = css`
  ${defaultBorder};
  font-family: ${fonts.primary};
  font-size: ${({ size = "normal" }) => fontSizes[size]}rem;
  font-weight: bold;
  line-height: 1.2;
  background-color: ${colors.light};
  color: ${colors.dark};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  padding: ${defaultIndent}rem;
  outline: none;
  transition: all 0.1s ease-in;
  border-radius: 3px;
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "none")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  &:hover {
    ${({ disabled }) => !disabled && hoverBorderStyles};
  }
`;

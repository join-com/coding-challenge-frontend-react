import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import media from "../helpers/mediaQuery";
import { colors } from "../constants/styles";

// createGlobalStyle doesn't work with snapshot testing
// move styles to `css` to have ability create snapshot test
export const globalStyles = css`
  ${reset};
  color: ${colors.dark};
  background: ${colors.light};
  font-size: 10px;
  box-sizing: border-box;
  ${media.tablet`
    font-size: 12px;
  `} ${media.desktop`
    font-size: 14px;
  `} 

   a {
    color: ${colors.dark};
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;

export default GlobalStyle;

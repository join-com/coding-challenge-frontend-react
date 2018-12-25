import styled from "styled-components";
import { breakpoints, indents } from "../../../constants/styles";
import media from "../../../helpers/mediaQuery";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${indents.mobile}rem;
  box-sizing: border-box;
  ${media.tablet`
    width: calc(${breakpoints.tablet}px - ${indents.tablet * 2}rem);
  `}
  ${media.desktop`
    width: calc(${breakpoints.desktop}px - ${indents.desktop * 2}rem);
  `}
  ${media.desktopLarge`
    width: calc(${breakpoints.desktopLarge}px - ${indents.extraLarge * 2}rem);
  `}
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ alignItems = "center" }) => alignItems};
  margin: ${indents.mobile}rem 0;
`;

export const PageWrapper = styled.div`
  margin: 0 0 ${indents.desktop}rem 0;
`;

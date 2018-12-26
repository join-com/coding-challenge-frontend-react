import styled from "styled-components";
import media from "../../helpers/mediaQuery";
import { indents } from "../../constants/styles";

export const MapElement = styled.div`
  height: 100%;
`;

export const MapContainerElement = styled.div`
  height: 300px;
  margin: ${indents.mobile}rem 0;
  ${media.tablet`
    height: 400px;
    margin: ${indents.tablet}rem 0;
    `};
  ${media.desktop`
    height: 500px;
    margin: ${indents.desktop}rem 0;
  `};
`;

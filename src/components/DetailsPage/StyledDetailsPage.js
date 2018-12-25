import styled from "styled-components";
import { defaultBorder } from "../../helpers/stylesMixins";
import { indents, colors } from "../../constants/styles";
import media from "../../helpers/mediaQuery";

export const DetailsInfo = styled.div`
  ${defaultBorder};
  padding: ${indents.mobile}rem;
  background-color: ${colors.primary};
  margin: ${indents.desktop}rem 0;
  ${media.tablet`
    padding: ${indents.tablet}rem;
  `} ${media.desktop`
    padding: ${indents.desktop}rem;
  `};
`;

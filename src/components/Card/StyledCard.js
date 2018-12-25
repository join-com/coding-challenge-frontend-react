import styled from "styled-components";
import { defaultBorder } from "../../helpers/stylesMixins";
import { indents, fontSizes, defaultIndent, colors } from "../../constants/styles";
import media from "../../helpers/mediaQuery";

export const StyledCard = styled.div`
  ${defaultBorder};
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: ${indents.mobile}rem;
  padding: ${indents.mobile}rem;
  background-color: ${colors.primary};
  ${media.mobile`
    flex-direction: row;
  `} 
  ${media.tablet`
    padding: ${indents.tablet}rem;
    margin-bottom: ${indents.tablet}rem;
  `} 
  ${media.desktop`
    padding: ${indents.desktop}rem;
    margin-bottom: ${indents.desktop}rem;
  `};
`;

export const BikeTitle = styled.h5`
  font-size: ${fontSizes.large}rem;
  margin-bottom: ${defaultIndent}rem;
`;

export const BikeImage = styled.img`
  width: 100%;
  background-color: ${colors.light};
  ${media.mobile`
    width: 50%;
  `}
  ${media.tablet`
    width: 25%;
  `}
   ${media.desktop`
    width: 20%;
  `};
`;
export const BikeInfo = styled.div`
  ${media.mobile`
    padding-left: ${indents.mobile}rem;
  `} 
  ${media.tablet`
    padding-left: ${indents.tablet}rem;
  `} 
  ${media.desktop`
    padding-left: ${indents.desktop}rem;
  `};
`;

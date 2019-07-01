import styled from 'styled-components';

import { fonts, colors } from './styled';

export const H1 = styled.h1`
  font-family: ${fonts.arial};
  font-weight: bold;
  color: ${colors.black};
`;

export const H2 = styled.h2`
  font-family: ${fonts.arial};
  font-weight: bold;
  color: ${colors.black};
`;

export const Link = styled.a`
  text-decoration: underline;
`;

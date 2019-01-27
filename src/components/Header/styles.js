import styled from 'styled-components';

import { boxShadow } from '../../theme/mixins';

export const Wrapper = styled.header`
  width: 100%;
  height: 70px;
  ${boxShadow};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: ${props => props.theme.fontLarge};
  color: ${props => props.theme.primaryColor};
`;

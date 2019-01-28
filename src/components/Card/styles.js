import styled from 'styled-components';

import { boxShadow } from '../../theme/mixins';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.white};
  border-radius: 6px;
  ${boxShadow};
`;
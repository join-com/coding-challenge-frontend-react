import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  text-align: ${props => props.align || 'center' };
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontDefault};
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
`;

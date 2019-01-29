import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  text-align: ${props => props.align || 'center' };

  margin: 25px auto 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  font-size: ${props => props.theme.fontDefault};
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
  cursor: pointer;
`;

export const Page = styled.div`
  width: 60px;
  flex-grow: 1;
  font-size: ${props => props.theme.fontDefault};
  color: ${props => props.theme.primaryColor};
  font-weight: bold;
`;

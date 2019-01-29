import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  height: 100%;

  margin: 30vh auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  display: block;
  width: ${props => props.size || '64' }px;
  height: ${props => props.size || '64' }px;

  &:after {
    content: " ";
    display: block;
    width: ${props => props.size - 18 || '46' }px;
    height: ${props => props.size - 18 || '46' }px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid ${props => props.color || props.theme.primaryColor};
    border-color: ${props => props.color || props.theme.primaryColor } transparent ${props => props.color || props.theme.primaryColor } transparent;
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

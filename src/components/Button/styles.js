import styled from 'styled-components';

export const Wrapper = styled.div`
  /* padding: 0 1em; */
  display: flex;
  /* align-items: center; */

  & > a {
    /* width: calc(100% - 3em); */
    height: 40px;
    line-height: 40px;
    padding: 0.1em 2em;
    font-size: ${props => props.theme.fontSmall};
    font-weight: 700;
    color: ${props => props.theme.primaryColor};
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 2px;
    text-align: center;
    background: #FFF;
    transition: all 0.2 ease-in-out;

    &:hover,
    &:focus,
    &:active {
      text-decoration: none;
      background: ${props => props.theme.primaryColor};
      color: #FFF;
      transition: all 0.2 ease-in-out;
    }
  }
`;

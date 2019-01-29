import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0px 20px;
  background-color: ${props => props.theme.primaryColor};
`;

export const Center = styled.div`
  width: calc(100% - 30px);
  max-width: 960px;
  margin: auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 960px) {
    flex-wrap: wrap;
  }
`;
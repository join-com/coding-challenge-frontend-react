import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 200px;
  
  margin: 15px auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`;

export const Body = styled.div`
  padding: 15px 20px;
`;

export const Image = styled.div`
  width: 100%;
  min-height: ${props => props.full ? '200px' : '200px'};
  background-color: ${props => props.theme.mutedColor};
  border-radius: 6px 6px 0px 0px;

  ${props => props.image ? `
    background-image: url(${props.image});
    background-size: cover;
    background-position: center center;
  ` : null }
`;


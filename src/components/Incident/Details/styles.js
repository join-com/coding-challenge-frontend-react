import styled from 'styled-components';

export const Wrapper = styled.div`
  width: calc(100% - 60px);
  padding: 45px 30px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
`;

export const Body = styled.div`
  padding: 15px 20px;
`;

export const Image = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: ${props => props.theme.mutedColor};
  border-radius: 6px 6px 0px 0px;

  ${props => props.image ? `
    background-image: url(${props.image});
    background-size: cover;
    background-position: center center;
  ` : null }
`;

export const Description = styled.p`
  font-size: ${props => props.theme.fontMedium};
  color: ${props => props.theme.baseColor};

  margin: 30px auto;
`;

export const Divider = styled.hr`
  border: 0.5px solid #CCC;
`;

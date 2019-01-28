import styled from 'styled-components';

export const Title = styled.h3`
  font-size: ${props => props.theme.fontDefault};
  color: ${props => props.theme.primaryColor};

  margin-top: 0px;
  margin-bottom: 5px;
`;

export const Address = styled.p`
  font-size: ${props => props.theme.fontMedium};
  margin-top: 0px;
  margin-bottom: 15px;
`;

export const OccurredAt = styled.p`
  font-size: ${props => props.theme.fontSmall};
  color: ${props => props.theme.mutedColor};
  margin-top: 0px;
  margin-bottom: 15px;
  text-transform: capitalize;
`;
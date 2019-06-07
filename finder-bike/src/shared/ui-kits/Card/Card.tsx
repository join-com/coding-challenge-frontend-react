import React from 'react';
import styled from 'styled-components';
import * as Colors from '../Variables/Colors';
import { Image } from '../Image';

const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.grey4};
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.2s ease-out;

  @media only screen and (min-width: 680px) {
    grid-template-columns: 180px 1fr;
  }

  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

const StyledCardContent = styled.div`
  display: grid;
  grid-row-gap: 5px;
  padding: 1rem;
  align-items: center;
`;

const StyledCardThumbnail = styled(Image)`
  display: none;

  @media only screen and (min-width: 680px) {
    display: block;
    width: 100%;
  }
`;

export interface ICard {
  thumbnailURL: string;
  children?: React.ReactNode;
}

function Card(props: ICard) {
  return (
    <StyledCardWrapper>
      <StyledCardThumbnail src={props.thumbnailURL} />
      <StyledCardContent>{props.children}</StyledCardContent>
    </StyledCardWrapper>
  );
}

export default Card;

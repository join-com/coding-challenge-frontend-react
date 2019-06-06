import React from 'react';
import styled from 'styled-components';
import * as Colors from '../Variables/Colors';
import { Image } from '../Image';
import { Text } from '../Text';

const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.grey4};

  @media only screen and (min-width: 680px) {
    grid-template-columns: 150px 5fr;
  }
`;

const StyledCardContent = styled.div`
  display: grid;
  grid-row-gap: 5px;
  padding: 10px;
  grid-template-rows: 1fr 2fr 1fr;
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
  title: string;
  description: string;
  date: string;
  titleLink?: string;
}

function Card(props: ICard) {
  return (
    <StyledCardWrapper>
      <StyledCardThumbnail src={props.thumbnailURL} />
      <StyledCardContent>
        <Text size={15} isBold isBlock href={props.titleLink}>
          {props.title}
        </Text>
        <Text isBlock>{props.description}</Text>
        <Text isBlock>{props.date}</Text>
      </StyledCardContent>
    </StyledCardWrapper>
  );
}

export default Card;

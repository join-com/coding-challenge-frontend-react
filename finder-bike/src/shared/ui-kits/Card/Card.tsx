import React from 'react';
import styled from 'styled-components'
import * as Colors from '../Variables/Colors'
import { Image } from '../Image';
import { Text } from '../Text';

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 5fr;
  background-color: ${Colors.white};
  border: 1px solid ${Colors.grey4};
`

const CardContent = styled.div`
  display: grid;
  grid-row-gap: 15px;
  padding: 10px;
`

export interface ICard {
  thumbnailURL: string;
  title: string;
  description: string;
  date: string;
  titleLink?: string;
}

const Card: React.FC<ICard> = (props) =>  {
  return (
    <CardWrapper>
      <Image width={150} height={150} src={props.thumbnailURL} />
      <CardContent>
        <Text size={15} isBold isBlock href={props.titleLink}>{props.title}</Text>
        <Text isBlock>{props.description}</Text>
        <Text isBlock>{props.date}</Text>
      </CardContent>
    </CardWrapper>
  )
}

export default Card;
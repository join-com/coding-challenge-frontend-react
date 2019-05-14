import React from 'react'
import { H3 } from '@/ui/typography'
import {
  ItemContainer,
  ImageContainer,
  ContentContainer,
  StyledImage,
  StyledLink,
} from './styled'

type Props = Incident

export const ListItem = ({
  title,
  description,
  media: { image_url },
  id,
  ...props
}: Props) => (
  <ItemContainer>
    <ImageContainer>
      {image_url && <StyledImage src={image_url} />}
    </ImageContainer>
    <ContentContainer>
      <H3>
        <StyledLink to={`/incidents/${id}`}>{title}</StyledLink>
      </H3>
      <p>{description || 'No description'}</p>
    </ContentContainer>
  </ItemContainer>
)

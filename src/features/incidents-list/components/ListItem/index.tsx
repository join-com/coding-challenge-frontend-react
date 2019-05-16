import React from 'react'
import { H3 } from '@/ui/typography'
import { FixedDescription } from '@/ui/FixedDescription'
import {
  ItemContainer,
  ImageContainer,
  ContentContainer,
  StyledLink,
} from './styled'
import BikePlaceholder from './assets/bike-placeholder.png'

type Props = Incident

export const ListItem = ({
  title,
  description,
  media: { image_url_thumb },
  id,
  ...props
}: Props) => (
  <ItemContainer>
    <ImageContainer image={image_url_thumb || BikePlaceholder} />
    <ContentContainer>
      <H3>
        <StyledLink to={`/incidents/${id}`}>{title}</StyledLink>
      </H3>
      <FixedDescription>{description || 'No description'}</FixedDescription>
    </ContentContainer>
  </ItemContainer>
)

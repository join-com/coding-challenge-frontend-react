import React from 'react'
import { H3 } from '@/ui/typography'
import { format } from 'date-fns/esm'
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
  occurred_at,
  address,
  id,
  ...props
}: Props) => (
  <ItemContainer>
    <ImageContainer
      image={image_url_thumb || BikePlaceholder}
      fallback={BikePlaceholder}
    />
    <ContentContainer>
      <H3>
        <StyledLink to={`/incidents/${id}`}>{title}</StyledLink>
      </H3>
      <FixedDescription>{description || 'No description'}</FixedDescription>
      <p>
        {format(new Date(occurred_at * 1000), 'MMMM dd yyyy')}
        {' - '}
        {address}
      </p>
    </ContentContainer>
  </ItemContainer>
)

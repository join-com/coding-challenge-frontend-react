import styled from '@/libs/styled-components'
import { Link } from 'react-router-dom'

export const ItemContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: 220px;
  border-radius: 5px;
  border: ${({ theme }) => `solid 3px ${theme.color.divider}`};
  margin-bottom: 16px;
`

export const ImageContainer = styled.div`
  width: 220px;
  height: 214px;
  flex-grow: 0;
  flex-shrink: 0;
  background-image: ${({
    image,
    fallback,
  }: {
  image: string
  fallback: string
  }) => `url(${image}), url(${fallback})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
`

export const ContentContainer = styled.div`
  padding: 12px;
`

// @ts-ignore
export const StyledLink = styled(Link)``

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
`

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`

export const ContentContainer = styled.div`
  padding: 12px;
`

// @ts-ignore
export const StyledLink = styled(Link)``

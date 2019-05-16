import React from 'react'

import { StyledMarker } from './styled'

type Props = {
  lat: number
  lng: number
  text: string
}

export const MapMarker = (props: Props) => <StyledMarker />

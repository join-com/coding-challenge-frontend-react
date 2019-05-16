import styled from '@/libs/styled-components'
import { P } from '@/ui/typography'

export const FixedDescription = styled(P)`
  margin: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`

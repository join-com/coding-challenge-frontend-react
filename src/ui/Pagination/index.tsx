import React, { ReactNode, ReactElement, SyntheticEvent } from 'react'
// @ts-ignore
import { default as AtlasPagination } from '@atlaskit/pagination'

import { Container } from './styled'

type RenderEllipsis = ({ key }: { key: string }) => ReactNode

type RenderCollapse = {
  max: number
  ellipsis: RenderEllipsis
}

type Props = {
  collapseRange?: (
    pages: Array<ReactNode>,
    selectedIndex: number,
    renderCollapse: RenderCollapse,
  ) => Array<ReactNode>
  createAnalyticsEvent?: any
  components?: {
    Page?: ReactElement
    Previous?: ReactElement
    Next?: ReactElement
  }
  defaultSelectedIndex?: number
  getPageLabel?: (page: any, pageIndex: number) => number | string
  i18n?: {
    prev: string
    next: string
  }
  innerStyles?: Object
  max?: number
  onChange?: (event: SyntheticEvent, page: any, analyticsEvent: any) => void
  pages: Array<any>
  selectedIndex?: number
  renderEllipsis?: RenderEllipsis
}

export const Pagination = (props: Props) => (
  <Container>
    <AtlasPagination {...props} />
  </Container>
)

Pagination.defaultProps = {
  defaultSelectedIndex: 0,
  max: 10,
}

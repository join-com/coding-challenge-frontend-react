import { AppPage } from '../../../types'
import { ViewPage } from './ViewPage'

export const pages: AppPage = {
  bikeView: {
    component: ViewPage,
    exact: true,
    path: '/details/:key',
  },
}

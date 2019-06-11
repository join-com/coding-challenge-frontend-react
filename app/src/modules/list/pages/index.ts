import { AppPage } from '../../../types'
import { ListPage } from './ListPage'

export const pages: AppPage = {
  bikesList: {
    component: ListPage,
    exact: true,
    path: '/',
  },
}

import { AppPage } from '../types'
import { pages as listPages } from '../modules/list'
import { pages as viewPages } from '../modules/view'

export const pages: AppPage = {
  ...listPages,
  ...viewPages,
}

import * as React from 'react'
import * as RR from 'react-redux'
import useRouter from 'use-react-router'

import { Content, LoadingState } from '../../common'
import { useActions } from '../../../hooks'
import { selectors } from '../../../redux'
import { IncidentDetails } from '../containers'
import { RequestState } from '../../../instructions'

export const ViewPage: React.FC = () => {
  const actions = useActions()
  const {
    match: { params },
  } = useRouter<{ key: string }>()
  const key = parseInt(params.key)
  const exists = (RR as any).useSelector((state: any) => selectors.incidentExists(state, key))
  const { isLoading = !exists } = (RR as any).useSelector((state: any) =>
    selectors.incidentRequest(state, key),
  ) as RequestState
  React.useEffect(() => {
    if (!exists) {
      actions.getIncident.start(key)
    }
  }, [key])
  return <Content>{isLoading ? <LoadingState /> : <IncidentDetails />}</Content>
}

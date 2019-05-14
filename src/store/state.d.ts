import { State as IncidentsState } from '@/features/incidents-list/ducks'

declare type AppState = {
  incidents: IncidentsState
}

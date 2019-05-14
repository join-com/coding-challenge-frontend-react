import React from 'react'
import { connect } from 'react-redux'
import { H3 } from '@/ui/typography'
import { getIncidentById } from '@/features/incidents-list/selectors'
import { DetailsContainer } from './styled'
import { AppState } from '@/store/state'

type RouterProps = {
  match: {
    params: {
      id: number
    }
  }
}

const Details = ({ title, description, ...props }: Incident) => (
  <DetailsContainer>
    <H3>{title}</H3>
    <H3>DESCRIPTION OF INCEDENT</H3>
    <p>{description}</p>
  </DetailsContainer>
)

export const IncidentDetails = connect(
  (
    state: AppState,
    {
      match: {
        params: { id },
      },
    }: RouterProps,
  ) => ({
    ...getIncidentById(state, id),
  }),
)(Details)

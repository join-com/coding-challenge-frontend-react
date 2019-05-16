import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import queryString from 'query-string'
import { Form, Field } from 'react-final-form'
import { isValid } from 'date-fns/esm'
import Button from '@atlaskit/button'
import {
  loadIncidents,
  LoadIncidentsPayload,
} from '@/features/incidents-list/ducks'
import { FFInput } from '@/ui/Input'
import { FFDatePicker } from '@/ui/DatePicker'
import { StyledForm } from './styled'

type RequestIncidents = (payload: LoadIncidentsPayload) => void

const onSubmit = (
  requestIncidents: RequestIncidents,
  push: ({ search }: { search: string }) => void,
) => (values: object) => {
  if (Object.keys(values).length) {
    push({ search: queryString.stringify(values) })
  }
  requestIncidents(values)
}

const checkDateFormat = (value: string) => {
  if (!value) return undefined
  return isValid(new Date(value)) ? undefined : 'YYYY/MM/DD format required'
}

type RouterProps = {
  history: {
    push: ({ search }: { search: string }) => void
  }
}

type Props = {
  requestIncidents: RequestIncidents
} & RouterProps

const FormComponent = ({ requestIncidents, history: { push } }: Props) => (
  <Form
    onSubmit={onSubmit(requestIncidents, push)}
    render={({ handleSubmit }) => (
      <StyledForm onSubmit={handleSubmit}>
        <Field
          name="query"
          // @ts-ignore
          component={FFInput}
          placeholder="Search case description"
        />
        <Field
          name="occurredAfter"
          // @ts-ignore
          component={FFDatePicker}
          placeholder="From"
          validate={checkDateFormat}
        />
        <Field
          name="occurredBefore"
          // @ts-ignore
          component={FFDatePicker}
          placeholder="To"
          validate={checkDateFormat}
        />
        <Button type="submit" appearance="primary">
          Find cases
        </Button>
      </StyledForm>
    )}
  />
)

export const SearchForm = withRouter(connect(
  null,
  { requestIncidents: loadIncidents.request },
)(FormComponent) as any) // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18999

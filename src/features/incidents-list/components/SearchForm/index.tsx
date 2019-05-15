import React from 'react'
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form'
import Button from '@atlaskit/button'
import { loadIncidents } from '@/features/incidents-list/ducks'
import { FFInput } from '@/ui/Input'
import { FFDatePicker } from '@/ui/DatePicker'
import { StyledForm } from './styled'

type RequestIncidents = ({}) => void

const onSubmit = (requestIncidents: RequestIncidents) => (values: object) => {
  requestIncidents({ ...values })
}

type Props = {
  requestIncidents: RequestIncidents
}

const FormComponent = ({ requestIncidents }: Props) => (
  <Form
    onSubmit={onSubmit(requestIncidents)}
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
        />
        <Field
          name="occurredBefore"
          // @ts-ignore
          component={FFDatePicker}
          placeholder="To"
        />
        <Button type="submit" appearance="primary">
          Find cases
        </Button>
      </StyledForm>
    )}
  />
)

export const SearchForm = connect(
  null,
  { requestIncidents: loadIncidents.request },
)(FormComponent)

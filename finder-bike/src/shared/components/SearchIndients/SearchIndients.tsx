import React from 'react';
import { Form, FormItem } from '../Form';
import Input from '../../ui-kits/Input/Input';
import { Button } from '../../ui-kits/Button';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const StyledInputDate = styled(Input)`
  font-size: 2rem;
`;

const StyledForm = styled(Form)``;

export interface ISearchIndient {
  onSubmit: (e: any, g: any) => void;
}

function SearchIndients(props: ISearchIndient) {
  return (
    <StyledForm onSubmit={props.onSubmit} inline>
      <FormItem>
        <Input type="query" name="query" placeholder="Title" />
      </FormItem>
      <FormItem>
        <StyledInputDate
          type="date"
          name="occurred_after"
          placeholder="From date"
          icon={faCalendarAlt}
        />
      </FormItem>
      <FormItem>
        <StyledInputDate
          type="date"
          name="occurred_before"
          placeholder="End date"
          icon={faCalendarAlt}
        />
      </FormItem>
      <Button color="primary" type="submit" isFull>
        Seartch
      </Button>
    </StyledForm>
  );
}

export default SearchIndients;

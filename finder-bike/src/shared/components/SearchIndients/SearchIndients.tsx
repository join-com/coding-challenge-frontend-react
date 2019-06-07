import React from 'react';
import { Form, FormItem } from '../Form';
import Input from '../../ui-kits/Input/Input';
import { Button } from '../../ui-kits/Button';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export interface ISearchIndient {
  onSubmit: (e: any, g: any) => void;
}

function SearchIndients(props: ISearchIndient) {
  return (
    <Form onSubmit={props.onSubmit} inline>
      <FormItem>
        <Input type="query" name="query" placeholder="Title" />
      </FormItem>
      <FormItem>
        <Input
          type="date"
          name="occurred_after"
          placeholder="From date"
          icon={faCalendarAlt}
        />
      </FormItem>
      <FormItem>
        <Input
          type="date"
          name="occurred_before"
          placeholder="End date"
          icon={faCalendarAlt}
        />
      </FormItem>
      <Button color="primary" type="submit" isFull>
        Seartch
      </Button>
    </Form>
  );
}

export default SearchIndients;

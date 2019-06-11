import React, { Component } from 'react';
import styled from '@emotion/styled';

import { Input, DatePicker, Button } from 'antd';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import queryString from 'querystring';

import moment, { Moment } from 'moment';
import { History } from 'history';

const { RangePicker } = DatePicker;

const FormWrapper = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

type FormElemProps = {
  wide?: boolean;
  width?: number;
};

const FormElem = styled.div<FormElemProps>`
  width: ${props => (props.wide ? '100%' : props.width + 'px')};
  flex-shrink: ${props => (props.width ? 0 : undefined)};

  &:not(:last-child) {
    margin-right: 12px;
  }
`;

const serializeState = ({ query, startDate, endDate }: FormState) => {
  const serializedState: { [key: string]: string } = {};

  if (query) {
    serializedState.query = query;
  }

  if (startDate) {
    serializedState.startDate = startDate.format('X');
  }

  if (endDate) {
    serializedState.endDate = endDate.format('X');
  }

  return queryString.stringify(serializedState);
};

type FormState = {
  query: string | undefined;
  startDate: Moment | undefined;
  endDate: Moment | undefined;
};

type FilterProps = {
  history: History;
};

class Filter extends Component<FilterProps, FormState> {
  constructor(props: FilterProps) {
    super(props);

    const { query, startDate, endDate } = queryString.parse(
      window.location.search.substr(1)
    );

    this.state = {
      query: query as string | undefined,
      startDate: startDate ? moment.unix(+startDate) : undefined,
      endDate: endDate ? moment.unix(+endDate) : undefined
    };
  }

  handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: e.target.value
    });
  };

  handleDateRangeChange = ([startDate, endDate]: RangePickerValue) => {
    this.setState({
      startDate: startDate && startDate.startOf('day'),
      endDate: endDate && endDate.endOf('day')
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    this.props.history.push(`/?${serializeState(this.state)}`);
  };

  render() {
    const { startDate, endDate } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <FormWrapper>
          <FormElem wide>
            <Input
              onChange={this.handleQueryChange}
              value={this.state.query}
              placeholder="Input description..."
              allowClear
            />
          </FormElem>

          <FormElem width={280}>
            <RangePicker
              disabledDate={date => !!date && date.isAfter()}
              onChange={this.handleDateRangeChange}
              value={startDate && endDate ? [startDate, endDate] : undefined}
            />
          </FormElem>

          <Button type="primary" htmlType="submit">
            Find cases
          </Button>
        </FormWrapper>
      </form>
    );
  }
}

export default Filter;

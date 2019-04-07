// Core
import React, { PureComponent } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Instruments
import styled from 'styled-components';

const Form = styled.div`text-align: center;`;

const DescriptionSearchField = styled.input`
  display: inline-block;
  margin-right: 10px;
  margin-top: 20px;
`;

const WrapperDateFields = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-top: 20px;
`;

const DateWrapper = styled.div`
  display: inline-block;
  margin-right: 10px;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  display: inline-block;
  margin-right: 10px;
  margin-top: 20px;
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;

export default class SearchPanel extends PureComponent {
  state = {};

  onChangeData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const { onFind } = this.props;
    const { dateFrom, dateTo, query } = this.state;

    let errorMessage;

    if (dateFrom && !moment(dateFrom).isValid()) {
      errorMessage = 'date From is not valid';
    }

    if (dateTo && !moment(dateTo).isValid()) {
      errorMessage = 'date To is not valid';
    }

    if (dateFrom && dateTo && dateFrom > dateTo) {
      errorMessage = '"From" date is greater than date "To"';
    }

    if (!errorMessage) {
      onFind({
        dateFrom: moment(dateFrom).unix(),
        dateTo: moment(dateTo).unix(),
        query,
      });
    }

    this.setState({ errorMessage });
  };

  render() {
    const { isDataLoading } = this.props;
    const { errorMessage } = this.state;

    return (
      <WrapperDateFields>
        <Form onSubmit={this.onSubmit}>
          <DescriptionSearchField type="text" placeholder="Search case descriptions" name="query" maxLength={30} onChange={this.onChangeData} />

          <WrapperDateFields>
            <DateWrapper>
              <div>From</div>
              <input type="date" placeholder="from" name="dateFrom" onChange={this.onChangeData} />
            </DateWrapper>

            <DateWrapper>
              <div>To</div>
              <input type="date" placeholder="to" name="dateTo" onChange={this.onChangeData} />
            </DateWrapper>
          </WrapperDateFields>

          <SubmitButton type="submit" disabled={isDataLoading} onClick={this.onSubmit}>Find cases</SubmitButton>
        </Form>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </WrapperDateFields>
    );
  }
}

SearchPanel.propTypes = {
  isDataLoading: PropTypes.bool.isRequired,
  onFind: PropTypes.func.isRequired,
};

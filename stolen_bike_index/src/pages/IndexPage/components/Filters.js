import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, DatePicker, Row, Col, Button } from 'antd';
import { searchIncidentsByDateRangeRequest } from "../../../redux/actions/search_incidents_by_date_range.actions";
import { getAllIncidentsRequest } from "../../../redux/actions/get_all_incidents.actions";
import { countAllIncidentsRequest } from "../../../redux/actions/count_all_incidents.actions";
import { styles } from "../styles/Filters.styles";
import injectSheet from 'react-jss';

export default injectSheet(styles)(connect()(class Filters extends Component {
  state = {
    occurred_after: 0,
    occurred_before: 0
  };

  searchIncidentByTitle = (event) => this.props.dispatch({ type: 'SEARCH_BY_INCIDENT_TITLE', value: event.target.value });
  handleChange = (moment, data) => {
    if(data[0]) {
      this.setState({ occurred_after: new Date(data[0]).valueOf(), occurred_before: new Date(data[1]).valueOf() });
    } else {
      this.props.dispatch(getAllIncidentsRequest(1));
      this.props.dispatch(countAllIncidentsRequest());
      this.props.dispatch({ type: 'RESET_SEARCH_OPTION' });
    }
  };

  searchIncidentByDateRange = () => {
    this.props.dispatch(searchIncidentsByDateRangeRequest(+this.state.occurred_after.toString().slice(0, 10), +this.state.occurred_before.toString().slice(0, 10)));
  };

  render() {
    const { classes } = this.props;
    return (
      <Row type="flex" justify='space-between' className={classes.row_position}>
        <Col span={8}>
          <Input.Search
            onChange={this.searchIncidentByTitle}
            placeholder='Search by all incident titles' />
        </Col>
        <div>
          <DatePicker.RangePicker onChange={this.handleChange} />
          <Button type='primary' className={classes.button_position} onClick={this.searchIncidentByDateRange}>Find Cases</Button>
        </div>
      </Row>
    );
  }
}));


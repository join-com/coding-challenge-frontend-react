import React, { Component } from 'react';
import './IncidentList.scss';
import 'react-dates/lib/css/_datepicker.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../store/Store';
import { getIncidents } from '../../store/actions/incidentsActions';

import IncidentListItem from './incident-list-item/IncidentListItem';
import Pagination from '../common/pagination/Pagination';
import SearchInput from '../common/search-input/SearchInput';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import SearchICO from '../../assets/icons/search.svg'

class IncidentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        };
    }
    componentDidMount() {
        this.props.getIncidents();
    }

    render() {
        return (
            <div className="sectWrap">
                <div className="sectWrap__header--controls">
                    <Pagination />
                    <SearchInput
                        name="listSearch"
                        placeholder="...search for case title"
                        value=""
                        icon={SearchICO}
                        label={null}
                        error={null}
                        type="search"
                        onChange={this.handleChange}
                    />
                    <DateRangePicker
                        startDateId="startDate"
                        endDateId="endDate"
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
                    />
                </div>

                <div className="sectWrap__header--subTitle">21 Cases Returned</div>

                <div className="pageList">
                    <IncidentListItem />
                    <IncidentListItem />
                    <IncidentListItem />
                </div>
            </div>
        );
    }
}

IncidentList.propTypes = {
    getIncidents: PropTypes.func.isRequired,
    incidents: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    incidents: state.incidents,
});

export default connect(mapStateToProps, { getIncidents })(IncidentList)
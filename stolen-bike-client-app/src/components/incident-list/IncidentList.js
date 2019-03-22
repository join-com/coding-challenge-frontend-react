import React, { Component } from 'react';
import './IncidentList.scss';
import 'react-dates/lib/css/_datepicker.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIncidents } from '../../store/actions/incidentsActions';

import IncidentListItem from './incident-list-item/IncidentListItem';
import Spinner from '../common/Spinner'
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
        console.log(this.props);
        const {
            dataset,
            loading
        } = this.props;

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
                    {dataset.incidents === null || loading
                        ? <Spinner />
                        : (
                            <React.Fragment>
                                {
                                    dataset.incidents.incidents.map(incident => {
                                        return (<IncidentListItem key={incident.id} incident={incident} />)
                                    })
                                }
                            </React.Fragment>
                        )
                    }
                </div>
            </div>
        );
    }
}

IncidentList.propTypes = {
    getIncidents: PropTypes.func.isRequired,
    dataset: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    dataset: state.incidentsReducer,
});

export default connect(mapStateToProps, { getIncidents })(IncidentList)
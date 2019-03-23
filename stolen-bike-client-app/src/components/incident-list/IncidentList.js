import React, { Component } from 'react';
import './IncidentList.scss';
import 'react-dates/lib/css/_datepicker.css';
import * as moment from 'moment';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIncidents } from '../../store/actions/incidentsActions';

import IncidentListItem from './incident-list-item/IncidentListItem';
import IncidentItemDetail from './incident-item-detail/IncidentItemDetail';
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
            loadedCollection: null,
            startDate: null,
            endDate: null,
            focusedInput: null,

            pagination_data: {
                currentPage: 0,
                perPage: 0,
                totalPages: 0
            },

            popup: {
                isOpen: false,
                id: null
            },

            search: ""
        };
    }
    componentDidMount() {
        this.props.getIncidents();
    }

    handleDateRange = () => {
        const startDate = moment(this.state.startDate).utc();
        const endDate = moment(this.state.endDate).utc();
        this.props.getIncidents(startDate, endDate);
    }
    paginate = (collection, page, numItems) => {
        if (!Array.isArray(collection)) {
            throw `Expect array and got ${typeof collection}`;
        }
        const currentPage = parseInt(page);
        const perPage = parseInt(numItems);
        const offset = (page - 1) * perPage;
        const paginatedItems = collection.slice(offset, offset + perPage);

        return {
            currentPage,
            perPage,
            total: collection.length,
            totalPages: Math.ceil(collection.length / perPage),
            data: paginatedItems
        };
    }
    prev = () => {
        let pagination_data = this.state.pagination_data;
        if (this.state.pagination_data.currentPage <= 1) {
            pagination_data.currentPage = 1;
        } else {
            pagination_data.currentPage -= 1;
        }
        this.setState({
            pagination_data: pagination_data
        });
        this.loadedCollection(pagination_data.currentPage, 10);
    }
    next = () => {
        let pagination_data = this.state.pagination_data;
        if (this.state.pagination_data.currentPage >= this.state.pagination_data.totalPages) {
            pagination_data.currentPage = this.state.pagination_data.totalPages;
        } else {
            pagination_data.currentPage += 1;
        }
        this.setState({
            pagination_data: pagination_data
        });
        this.loadedCollection(pagination_data.currentPage, 10);
    }
    loadedCollection = (page = 1, perPage = 10) => {
        const getdata = this.filteredCollections();
        let updatePagination = this.state.pagination_data;

        if (!this.state.pagination_data.currentPage) {
            updatePagination.currentPage = page;
            updatePagination.perPage = perPage;
            updatePagination.totalPages = Math.ceil(getdata.length / perPage);
            this.setState({
                pagination_data: updatePagination
            });
        }

        return this.paginate(
            getdata,
            this.state.pagination_data.currentPage,
            this.state.pagination_data.perPage
        );
    }
    filteredCollections = () => {
        const criteria = this.state.search.toLowerCase();
        const key = "title";
        if (criteria && key) {
            return Object.values(this.props.dataset.incidents.incidents).filter(item => {
                if (item[key]) {
                    const to_compare = item[key].toLowerCase();
                    return to_compare.includes(criteria)
                }
                return this.props.dataset.incidents.incidents;
            });
        } else {
            return this.props.dataset.incidents.incidents;
        }
    }
    handleSearchCriteria = (event) => {
        this.setState({
            search: event.target.value
        })
    }
    togglePopup = (id) => {
        //e.stopPropagation();
        let popupData = {
            isOpen: false,
            id: null
        };
        popupData.id = id;
        popupData.isOpen = !this.state.popup.isOpen;
        this.setState({
            popup: popupData
        })
    }

    render() {
        const {
            dataset,
            loading
        } = this.props;

        return (
            <div className="sectWrap">
                <div className="sectWrap__header--controls">
                    <SearchInput
                        name="listSearch"
                        placeholder="...search by case title"
                        value={null}
                        icon={SearchICO}
                        label={null}
                        error={null}
                        type="search"
                        onChange={this.handleSearchCriteria}
                    />
                    <DateRangePicker
                        startDateId="startDate"
                        endDateId="endDate"
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onDatesChange={({ startDate, endDate }) => {
                            this.setState({ startDate, endDate });
                            this.handleDateRange();
                        }}
                        focusedInput={this.state.focusedInput}
                        onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}
                        isOutsideRange={() => false}
                    />
                    <Pagination
                        pagination_data={this.state.pagination_data}
                        next={this.next}
                        prev={this.prev}
                    />
                </div>
                <div className="sectWrap__header--subTitle">
                    {dataset.incidents === null || loading
                        ? null
                        : this.filteredCollections().total + ' Cases Returned'
                    }

                </div>

                <div className="pageList">
                    {dataset.incidents === null || loading
                        ? <Spinner />
                        : (
                            <React.Fragment>
                                {
                                    this.loadedCollection().data.map(incident => {
                                        return (
                                            <div key={incident.id}>
                                                <IncidentListItem incident={incident} togglePopup={this.togglePopup} />
                                                {
                                                    this.state.popup.isOpen && this.state.popup.id === incident.id
                                                        ? (
                                                            <div className="modalOverlay">
                                                                <IncidentItemDetail incident={incident} togglePopup={this.togglePopup} />
                                                            </div>
                                                        ) : null
                                                }
                                            </div>
                                        )
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
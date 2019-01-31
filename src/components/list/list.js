import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listActions } from '../../actions/listActions';
import { styles } from './styles'
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SearchFilters from '../searchFilters/searchFilters';
import BikeCard from './bikeCard';
import Pagination from "react-js-pagination";
import Loader from '../loader/loader';
import { debug } from 'util';

class List extends Component {
    constructor() {
        super();
        this.state = {
            searchParams: {
                perPage: 10,
                page: 1,
                search: "",
                dateTo: '',
                dateFrom: ''
            },
            errorMsg: '',
            isLoading: false

        }
    }
    componentDidMount = () => {
        this.initialCall();
    }

    responseCallback = (error = null) => {
        if (!!error) {
            this.setState({
                isLoading: false,
                errorMsg: error
            })
        } else {
            this.setState({
                isLoading: false,
                errorMsg: ''
            })
        }
    }

    fetchData = () => {
        this.setState({
            isLoading: true
        }, () => {
            this.props.fetchIncidents(this.state.searchParams, this.responseCallback);
        })
    }

    initialCall = () => {
        this.fetchData();
    }

    // fetchAllRecords = () => {
    //     this.props.fetchAllRecords();
    // }

    handleSearch = (params) => {
        this.setState({
            searchParams: {
                ...this.state.searchParams,
                search: params.search.trim(),
                page:1,
                dateFrom: params.dateFrom !== '' ? (new Date(params.dateFrom).getTime()) / 1000 : '',
                dateTo: params.dateTo !== '' ? (new Date(params.dateTo).getTime()) / 1000 : '',
            }
        }, this.fetchData)
    }

    handlePageChange = (page) => {
        this.setState({
            searchParams: {
                ...this.state.searchParams,
                page
            }
        }, this.fetchData)
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Helmet>
                    <title>Stolen bikes List</title>
                </Helmet>
                <Grid
                    container
                    direction="row"
                    // justify="center"
                    alignItems="flex-start"
                    className={`${classes.mainContainer} ${classes.fullPageHeight}`}
                >
                    <Grid item md={10} xl={10} sm={12} xs={12}>
                        <Paper className={classes.fullPageHeight}>
                            <SearchFilters
                                handleSearch={this.handleSearch}
                            />
                            {
                                !this.state.isLoading
                                    ?
                                    !this.state.errorMsg
                                        ?
                                        <div>
                                            <div>
                                                <span className={classes.totalCasesText}>
                                                    {`total cases : ${this.props.totalRecords}`}
                                                </span>
                                            </div>
                                            {
                                                this.props.stolenBikeList.map(
                                                    (item, i) => (
                                                        <div className={i % 2 == 0 ? 'even' : 'odd'}>
                                                            <BikeCard data={item} />
                                                        </div>
                                                    )
                                                )
                                            }

                                            {this.props.stolenBikeList.length < 1 && 
                                            <div className={classes.noRecords}>
                                                {"No records"}
                                            </div>}
                                            <Pagination
                                                prevPageText='prev'
                                                nextPageText='next'
                                                firstPageText='first'
                                                lastPageText='last'
                                                activePage={this.state.searchParams.page}
                                                itemsCountPerPage={this.state.searchParams.perPage}
                                                totalItemsCount={this.props.totalRecords || 0}
                                                onChange={this.handlePageChange}
                                            />

                                        </div>
                                        :
                                        <div className={classes.error}>
                                            {this.state.errorMsg}
                                        </div>
                                    :
                                    <Loader size={50} />

                            }

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

List.propTypes = {
    stolenBikeList: PropTypes.array,
    totalRecords: PropTypes.number,
}

function mapStateToProps(state) {
    return {
        stolenBikeList: state.bikeList.stolenBikeList,
        totalRecords: state.bikeList.totalRecords,
    }
}

export default withStyles(styles)(connect(
    mapStateToProps,
    Object.assign({}, listActions)
)(List));

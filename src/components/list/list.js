import React, { Component } from 'react'
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { listActions } from '../../actions/listActions';

class List extends Component {
    constructor() {
        super();
        this.state = {
            searchParams: {
                perPage: 10,
                page: 1,
                search: ''
            }

        }
    }
    componentDidMount = () => {
        this.props.fetchIncidents(this.state.searchParams);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>Stolen bikes List</title>
                </Helmet>
                will show list here.
            </div>
        )
    }
}

List.propTypes = {
    stolenBikeList: PropTypes.array
}

function mapStateToProps(state) {
    return {
        stolenBikeList: state.bikeList.stolenBikeList
    }
}

export default connect(
    mapStateToProps,
    Object.assign({}, listActions)
)(List);

import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { styles } from './styles'
import { withStyles } from '@material-ui/core/styles';
import { listActions } from '../../actions/listActions';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Helmet } from "react-helmet";
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import Loader from '../loader/loader';

const BikeLocation = ({ text }) => <div>{text}</div>;

function dateFormater(stamp) {
    let formatedDate = moment(stamp * 1000).format("LL");
    return formatedDate
}

class BikeDetail extends Component {
    state = {
        errorMsg: '',
        mapError: ''
    }
    componentDidMount = () => {
        this.props.fetchIncident(this.props.match.params.id, this.fetchIncident);
    }
    componentWillUnmount = () => {
        this.props.resetDetailState();
    }

    fetchIncident = (error = null) => {
        if (!!error) {
            this.setState({
                errorMsg: error
            })
        }
        else {
            this.setState({
                errorMsg: ''
            })
            this.props.fetchIncidentMapDetails(this.props.stolenBikeDetail.title, this.errorCallback);
        }
    }

    errorCallback = (error) => {
        this.setState({
            mapError: error
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Helmet>
                    <title>{this.props.stolenBikeDetail.title || "Stolen Bikes List"}</title>
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
                            {
                                this.state.errorMsg === ""
                                    ?
                                    <div className={classes.detailScreen}>
                                        <Typography component="h4" variant="h4" color="primary" >
                                            {this.props.stolenBikeDetail.title}
                                        </Typography>
                                        <div className={classes.subHeading}>
                                            <span>Stolen on </span>{dateFormater(this.props.stolenBikeDetail.occurred_at)} <span>at</span> {this.props.stolenBikeDetail.address}
                                        </div>
                                        <div className={classes.map}>

                                            {this.props.stolenBikeMap.length > 1 || this.state.mapError !== ''
                                                ?
                                                <GoogleMapReact
                                                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_KEYS }}
                                                    defaultCenter={this.props.center}
                                                    defaultZoom={this.props.zoom}
                                                >
                                                    <BikeLocation
                                                        lat={this.props.stolenBikeMap[0]}
                                                        lng={this.props.stolenBikeMap[1]}
                                                        text={this.state.mapError || 'Bike Location'}
                                                    />
                                                </GoogleMapReact>
                                                :
                                                <Loader size={50} />
                                            }
                                        </div>
                                        <div className={classes.descriptions}>
                                            <Typography component="h4" variant="h4" color="primary" >
                                                {'Description of incident '}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary" className="cardChild">
                                                {this.props.stolenBikeDetail.description}
                                            </Typography>
                                        </div>
                                    </div>
                                    :
                                    <div className={classes.error}>
                                        {this.state.errorMsg}
                                    </div>

                            }


                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

BikeDetail.propTypes = {
    stolenBikeDetail: PropTypes.Object,
    stolenBikeMap: PropTypes.Object,
    resetState: PropTypes.func
}

function mapStateToProps(state) {
    return {
        stolenBikeDetail: state.bikeList.stolenBikeDetail,
        stolenBikeMap: state.bikeList.stolenBikeMap,
    }
}

export default withStyles(styles)(connect(
    mapStateToProps,
    Object.assign({}, listActions)
)(BikeDetail));

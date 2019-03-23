import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLocation } from '../../../store/actions/incidentsActions';

import './IncidentItemDetail.scss';
import Spinner from '../../common/Spinner'
import TimesICO from '../../../assets/icons/times.svg';
import Bike from '../../../assets/bykes/default.svg';

class IncidentItemDetail extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getLocation(this.props.incident.title);
    }
    timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    render() {
        const {
            togglePopup,
            incident,
            dataset,
            loading,
            locationLoading
        } = this.props;

        return (
            <div className="modal">
                {incident === null || loading
                    ? <Spinner />
                    : (
                        <React.Fragment>
                            <div className="modal__header">
                                <div className="modal__title">{incident.title}</div>
                                <img className="x" onClick={togglePopup} src={TimesICO} alt="" />
                            </div>
                            <div class="modal__content">
                                <div className="modal__content__lhs">
                                    {dataset.location === null || locationLoading
                                        ? <Spinner />
                                        : (
                                            <React.Fragment>
                                                {dataset.location.features.map(loc => {
                                                    console.log(loc);
                                                    if (loc.properties.id === incident.id) {
                                                        let center = {
                                                            lat: loc.geometry.coordinates[1],
                                                            lng: loc.geometry.coordinates[0]
                                                        };
                                                        let zoom = 14;
                                                        return (
                                                            <div className="mapWrap">
                                                                <GoogleMapReact
                                                                    defaultCenter={center}
                                                                    bounds={center}
                                                                    defaultZoom={zoom}
                                                                >
                                                                    {/* <AnyReactComponent
                                                                        lat={loc.geometry.coordinates[0]}
                                                                        lng={loc.geometry.coordinates[1]}
                                                                        text="My Marker"
                                                                    /> */}
                                                                </GoogleMapReact>
                                                            </div>
                                                        )
                                                    }
                                                    return <Spinner />
                                                })}
                                            </React.Fragment>
                                        )
                                    }
                                </div>
                                <div className="modal__content__rhs">
                                    {incident.media.image_url
                                        ? <img alt="Bike" src={incident.media.image_url} />
                                        : <img alt="Bike" src={Bike} />
                                    }
                                </div>
                            </div>
                        </React.Fragment>
                    )
                }
            </div>
        );
    }
}

IncidentItemDetail.propTypes = {
    getLocation: PropTypes.func.isRequired,
    dataset: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    dataset: state.incidentsReducer
});

export default connect(mapStateToProps, { getLocation })(IncidentItemDetail)

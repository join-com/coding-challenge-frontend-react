// Core
import React, { PureComponent } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import callApi from '../../utils/call-api';

// Instruments
import styles from './Case.module.scss';

// Components
import Header from '../Header/Header';
import Map from './Map/Map';

export default class Case extends PureComponent {
  state = {
    incident: {},
  };

  async componentDidMount() {
    const {
      match: { params: { id } },
      location: { state: { incident } = {} },
    } = this.props;

    let incidentBase = incident;

    if (incidentBase) {
      this.setState({ incident });
    } else {
      try {
        const data = await callApi({ id });
        this.setState({ incident: data.incident });
        incidentBase = data.incident;
      } catch (error) {
        throw new Error(`ERROR call api with caseId : ${id}`);
      }
    }

    const locations = await callApi({
      path: 'locations',
      occurredBefore: incidentBase.occurred_at + 1,
      occurredAfter: incidentBase.occurred_at,
      incidentType: incidentBase.type.toLowerCase(),
    });

    const incidentLocation = locations.features.find(
      feature => feature.properties.id === parseInt(id, 10),
    );

    if (incidentLocation) {
      this.setState({ mapCoordinates: incidentLocation.geometry.coordinates });
    }
  }

  render() {
    const {
      incident: {
        title, updated_at: updatedAt, description, address,
      },
      mapCoordinates,
    } = this.state;

    return (
      <div className={styles.Case}>
        <Header />
        <div>{title}</div>
        <div>{`Stolen ${moment.unix(updatedAt).format('llll')} at ${address}`}</div>
        {
          mapCoordinates
            && (
            <div className={styles.Map}>
              <Map center={{ lng: mapCoordinates[0], lat: mapCoordinates[1] }} />
            </div>
            )
        }
        <h2>DESCRIPTION OF INCIDENT</h2>
        <div>{description}</div>
      </div>
    );
  }
}

Case.propTypes = {
  location: PropTypes.shape,
  match: PropTypes.shape,
};

Case.defaultProps = {
  location: {},
  match: {},
};

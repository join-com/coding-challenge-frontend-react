import React, { PureComponent, Fragment } from 'react';
import { Skeleton, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container, StyledImage, BackContainer } from './bikeInfo.styles';
import defaultBike from '../../images/defaultBike.svg';
import { H1, H2 } from '../../theme/typography';

export class BikeInfo extends PureComponent {
  static propTypes = {
    bike: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    requestBikeInfo: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.object,
  };
  componentDidMount() {
    if (!this.props.bike.id) {
      this.props.requestBikeInfo(this.props.match.params.id);
    }
  }

  render() {
    const { bike, loading, error } = this.props;
    return (
      <Fragment>
        <BackContainer>
          <Link to="/">
            <Icon type="left" /> Back
          </Link>
        </BackContainer>
        <Container>
          {bike.id && (
            <React.Fragment>
              <StyledImage src={bike.media.image_url || defaultBike} />
              <H1> {bike.title} </H1>
              <p>
                Updated at:
                <strong> {new Date(bike.updated_at * 1000).toLocaleDateString()} </strong>
              </p>
              <p>
                Stolen at:
                <strong> {new Date(bike.occurred_at * 1000).toLocaleDateString()} </strong>
              </p>
              <H2> Description </H2>
              <p> {bike.description || 'No description.'} </p>
              <a href={`https://maps.google.com/maps/place/${bike.address}`} target="_blank" rel="noopener noreferrer">
                Location <Icon type="link" />
              </a>
            </React.Fragment>
          )}
          {!bike.id && loading && <Skeleton active rows="5" />}
          {error && error.error && <h2> Something wrong happened, Please try again.</h2>}
        </Container>
      </Fragment>
    );
  }
}

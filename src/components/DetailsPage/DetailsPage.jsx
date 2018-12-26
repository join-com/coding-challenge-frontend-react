import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import formatTimeStampToDate from "../../helpers/formatDate";
import { incidentPropTypes } from "../../constants/propTypes";
import { Container } from "../ui/Layout/StyledLayout";
import { DetailsInfo } from "./StyledDetailsPage";
import Heading from "../ui/Heading";
import Map from "../Map";
import Text from "../ui/Text";
import ErrorMessage from "../ui/ErrorMessage";
import ErrorBoundary from "../ErrorBoundary";

class DetailsPage extends Component {
  componentDidMount = () => {
    const {
      match: {
        params: { id }
      },
      fetchIncidentById
    } = this.props;
    fetchIncidentById(id);
  };

  render() {
    const { isLoading, item, error } = this.props;
    const { id, title, description, address, occurred_at } = item;
    const showItemCondition = !isLoading && !error && id;

    return (
      <ErrorBoundary>
        <Container>
          {showItemCondition && (
            <DetailsInfo>
              <Heading level={3}>{title}</Heading>
              <Text>
                <b>Stolen</b> {formatTimeStampToDate(occurred_at)} <b>at</b> {address}
              </Text>
              <Map address={address} />
              {description && (
                <Fragment>
                  <Heading level={5}>Description of incident</Heading>
                  <Text>{description}</Text>
                </Fragment>
              )}
            </DetailsInfo>
          )}
          {isLoading && <Text>Loading ...</Text>}
          {!isLoading && error && <ErrorMessage message={error} />}
        </Container>
      </ErrorBoundary>
    );
  }
}

DetailsPage.propTypes = {
  item: incidentPropTypes.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

DetailsPage.defaultProps = {
  error: null
};

export default DetailsPage;

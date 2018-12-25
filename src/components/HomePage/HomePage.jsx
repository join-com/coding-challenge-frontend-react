import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Filter from "../Filter";
import Pagination from "../Pagination";
import { Container } from "../ui/Layout/StyledLayout";
import ErrorMessage from "../ErrorMessage";
import Text from "../ui/Text";
import IncidentsList from "../IncidentsList/IncidentsList";

class HomePage extends Component {
  componentDidMount = () => {
    this.props.fetchIncidents();
  };

  changeSearchValue = ({ target: { value } }) => {
    const { changeUi } = this.props;
    changeUi({ name: "searchValue", value });
    changeUi({ name: "currentPage", value: 0 });
  };

  render() {
    const { incidents, isLoading, error, totalIncidentsLength, searchValue } = this.props;

    return (
      <Container>
        <Filter
          onChange={this.changeSearchValue}
          value={searchValue}
          disableInput={isLoading}
          totalIncidentsLength={totalIncidentsLength}
        />
        {!isLoading &&
          !error && (
            <Fragment>
              {totalIncidentsLength === 0 && <Text>No results</Text>}
              {totalIncidentsLength > 0 && (
                <Fragment>
                  <IncidentsList items={incidents} />
                  <Pagination />
                </Fragment>
              )}
            </Fragment>
          )}
        {isLoading && <Text>Loading ...</Text>}
        {!isLoading && error && <ErrorMessage message={error} />}
      </Container>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

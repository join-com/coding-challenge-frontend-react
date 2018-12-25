import React, { Component } from "react";
import PropTypes from "prop-types";
import Filter from "../Filter";
import Card from "../Card";
import Pagination from "../Pagination";
import { Container } from "../ui/Layout/StyledLayout";
import ErrorMessage from "../ErrorMessage";
import Text from "../ui/Text";

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
        <Filter onChange={this.changeSearchValue} value={searchValue} disableInput={isLoading} />
        {!isLoading &&
          !error && (
            <div>
              {totalIncidentsLength === 0 && <Text>No results</Text>}
              {totalIncidentsLength > 0 && (
                <div>
                  Total: {totalIncidentsLength}
                  <div>
                    {incidents.map(item => (
                      <Card key={item.id} item={item} />
                    ))}
                  </div>
                  <Pagination />
                </div>
              )}
            </div>
          )}
        {isLoading && <Text>Loading ...</Text>}
        {!isLoading && error && <ErrorMessage message={error} />}
      </Container>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

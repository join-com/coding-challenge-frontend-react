import React, { Component } from "react";
import PropTypes from "prop-types";
import Filter from "../Filter";
import Card from "../Card";
import Pagination from "../Pagination";

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
      <div>
        <Filter onChange={this.changeSearchValue} value={searchValue} disableInput={isLoading} />
        {!isLoading &&
          !error && (
            <div>
              {totalIncidentsLength === 0 && <p>No results</p>}
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
        {isLoading && <p>Loading ...</p>}
        {!isLoading && error && <p>{error} </p>}
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Filter from "../Filter";

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
                  <ul>
                    {incidents.map(({ id, title }) => (
                      <li key={id}>{title}</li>
                    ))}
                  </ul>
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

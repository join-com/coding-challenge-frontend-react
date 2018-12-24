import React, { Component } from "react";
import PropTypes from "prop-types";

class HomePage extends Component {
  componentDidMount = () => {
    this.props.fetchIncidents();
  };

  render() {
    const { incidents, isLoading, error, totalIncidentsLength } = this.props;

    return (
      <div>
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

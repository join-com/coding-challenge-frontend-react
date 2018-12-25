import React from "react";
import PropTypes from "prop-types";
import Card from "../Card";

import { incidentPropTypes } from "../../constants/propTypes";

function IncidentsList({ items }) {
  return (
    <div>
      {items.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

IncidentsList.propTypes = {
  items: PropTypes.arrayOf(incidentPropTypes).isRequired
};

export default IncidentsList;

import React from 'react';

const IncidentPage = props => {
  return (
    <div>
      Soon on incident id: {props.match.params.id}
    </div>
  );
}

export default IncidentPage;

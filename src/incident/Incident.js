import React, { Component } from "react";
import "../App.css";
import { getSingleIncident } from "../api/apiClient";
import Error from "../states/Error";
import Progress from "../states/Progress";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Title from "../home/Title";
import { Typography } from "@material-ui/core";
import moment from "moment";

const photoStyle = {
  height: "192px",
  flexShrink: 0,
  borderRadius: "2px",
  objectFit: "contain",
  maxWidth: "100%",
  width: "max-content"
};

const typeStyle = { fontWeight: "600" };

const spacerStyle = { width: "16px", height: "16px" };

const subtitleParentStyle = { display: "flex" };

class Incident extends Component {
  state = {
    pending: false,
    incident: null,
    error: false
  };

  onSuccess = (incident) => {
    this.setState(() => ({
      pending: false,
      error: false,
      incident
    }));
  };

  onFailure = () => {
    this.setState(() => ({
      pending: false,
      error: true
    }));
  };

  componentWillMount() {
    const { match: { params: { incidentId } } } = this.props;
    console.log("componentWillMount, incidentId: ", incidentId);
    this.setState((state) => ({ ...state, pending: true }));
    this.props.getSingleIncident(incidentId, this.onSuccess, this.onFailure);
  }

  render() {
    const { error, pending, incident } = this.state;
    return (
      <div>
        <Title />
        {error && <Error />}
        {pending && <Progress />}
        {!error && !pending && incident && <IncidentDetails incident={incident} />}
      </div>
    );
  }
}

function IncidentDetails({ incident }) {
  const { title, description, type, media: { image_url } } = incident;

  const getSubtitle = incident => {
    const { occurred_at, address } = incident;
    return `${moment.unix(occurred_at).format("ddd MMM Do YYYY")} - ${address}`;
  };

  return <div>
    <Typography variant="h5" gutterBottom>
      {title}
    </Typography>

    <div style={subtitleParentStyle}>

      <Typography variant="body" style={typeStyle} gutterBottom>
        {type}
      </Typography>

      <div style={spacerStyle} />

      <Typography variant="body" gutterBottom>
        {getSubtitle(incident)}
      </Typography>

    </div>

    {image_url && <img src={image_url} style={photoStyle} alt="" />}

    <div style={spacerStyle} />

    <Typography variant="body1" gutterBottom>
      DESCRIPTION OF INCIDENT
    </Typography>

    <Typography variant="body2" gutterBottom>
      {description}
    </Typography>

  </div>;
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getSingleIncident
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Incident);



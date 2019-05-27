import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const listParentStyle = {
  border: "1px solid rgba(0, 0, 0, 0.12)"
};

const countStyle = {
  display: "flex",
  flexDirection: "row-reverse"
};

const itemParentStyle = {
  background: "white",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
};

const itemPhotoStyle = {
  width: "80px",
  height: "80px",
  objectFit: "cover",
  flexShrink: 0,
  borderRadius: "2px",
};

const itemDetailsStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

const linkStyle = {
  textDecoration: "none",
};

const spaceStyle = { width: "16px" };

function BikeList(props) {
  const { currentPageIncidents, count } = props;
  return (
    <div>
      <Typography gutterBottom style={countStyle}>
        {`Total: ${count}`}
      </Typography>
      <div style={listParentStyle}>
        {currentPageIncidents.map((incident) =>
          <BikeItem key={incident.id} incident={incident} />
        )}
      </div>
    </div>
  );
}

export default BikeList;

function BikeItem({ incident }) {
  const imageUrl = incident.media.image_url ?
    incident.media.image_url : "https://www.materialui.co/materialIcons/maps/directions_bike_black_144x144.png";

  function getSubtitle(incident) {
    const { occurred_at, address } = incident;
    return `${moment.unix(occurred_at).format("ddd MMM Do YYYY")} - ${address}`;
  }

  return (
    <Link to={"/incident/" + incident.id} style={linkStyle}>

      <div style={itemParentStyle}>

        <img style={itemPhotoStyle} src={imageUrl} alt="" />

        <div style={spaceStyle} />

        <div style={itemDetailsStyle}>

          <Typography type="body1" color="textPrimary">
            {incident.title}
          </Typography>

          <Typography type="caption" color="textPrimary" gutterBottom>
            {incident.description}
          </Typography>

          <Typography type="caption" color="textPrimary">
            {getSubtitle(incident)}
          </Typography>

        </div>

      </div>

    </Link>
  );
}
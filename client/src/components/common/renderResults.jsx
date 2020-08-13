import React from "react";
import { Link } from "react-router-dom";
import Bike from "../../bike.png";

export default (props) => {
  const { incidents } = props;
  if (incidents) {
    return (
      <ul className="incidents-list">
        {incidents.map((incident) => {
          return (
            <li
              key={incident.id}
              className="row mx-0 my-3 py-3 rounded animate__animated animate__fadeInUp"
            >
              <img
                src={
                  incident.media.image_url ||
                  incident.media.image_url_thumb ||
                  Bike
                }
                alt="Not Found"
                className="stolen-item-image mx-auto mx-md-0 col-7 col-md-2"
              />
              <div className="details mt-3 mt-md-0 col-12 col-md-6">
                <Link to={`/bike/${incident.id}`}>
                  <h5 className="text-primary m-0">
                    {incident.title.slice(7)}
                  </h5>
                </Link>
                <p>
                  <strong>Description: </strong>{" "}
                  {incident.description || "Not Available"}
                </p>
              </div>
              <div className="date-details col-12 col-md-4">
                <span>
                  <strong className="text-danger">Stolen on </strong>{" "}
                  {new Date(incident.occurred_at * 1000)
                    .toUTCString()
                    .slice(0, 16)}
                  <strong className="text-danger"> at </strong>
                  {new Date(incident.occurred_at * 1000)
                    .toLocaleTimeString()
                    .replace(/:.* /, "")
                    .toLowerCase()}
                </span>
                <br />
                <span>
                  <strong>Location </strong>
                  {incident.address}
                </span>
                <br />
                <span>
                  <strong className="text-success">Reported on </strong>{" "}
                  {new Date(incident.updated_at * 1000)
                    .toUTCString()
                    .slice(0, 16)}
                  <strong className="text-success"> at </strong>
                  {new Date(incident.updated_at * 1000)
                    .toLocaleTimeString()
                    .replace(/:.* /, "")
                    .toLowerCase()}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
};

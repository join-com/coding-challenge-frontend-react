import React from "react";
import Bike from "../../bike.png";

export default (props) => {
  const { incidents } = props;

  if (incidents) {
    return (
      <ul className="incidents-list">
        {incidents.map((incident) => {
          return (
            <li key={incident.id} className="row my-2 py-3 rounded">
              <img
                src={
                  incident.media.image_url ||
                  incident.media.image_url_thumb ||
                  Bike
                }
                alt="Not Found"
                className="stolen-item-image col-12 col-lg-2"
              />
              <div className="details col-12 col-lg-6">
                <h3 className="text-primary m-0">{incident.title.slice(7)}</h3>
                <p>
                  <strong>Description: </strong>{" "}
                  {incident.description || "NOT AVAILABLE"}
                </p>
              </div>
              <div className="date-details col-12 col-lg-4">
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

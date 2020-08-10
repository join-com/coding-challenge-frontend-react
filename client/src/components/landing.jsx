import React, { Component } from "react";
import axios from "axios";

export default class Landing extends Component {
  state = {
    incidents: [],
  };

  componentDidMount = async () => {
    await axios
      .get(
        "https://bikewise.org/api/v2/incidents?per_page=100&proximity=Berlin&proximity_square=100"
      )
      .then((res) => {
        console.log(res.data.incidents);
        this.setState({
          incidents: res.data.incidents,
        });
      });

    //  await axios
    //    .get(
    //      "https://bikewise.org/api/v2/locations/markers?per_page=100&proximity=Berlin&proximity_square=100"
    //    )
    //    .then((res) => console.log(res.data.features));
  };

  render() {
    const { incidents } = this.state;

    return (
      <div>
        <ul className="incidents-list">
          {incidents.map((incident, key) => {
            return (
              <li key={key}>
                <img
                  src={
                    incident.media.image_url ||
                    incident.media.image_url_thumb ||
                    "https://images.assetsdelivery.com/compings_v2/vectorknight/vectorknight1801/vectorknight180100065.jpg"
                  }
                  alt="Not Found"
                  className="stolen-item-image"
                />
                <div className="details">
                  <h3>{incident.title.slice(7)}</h3>
                  <p>
                    <strong>Description: </strong>{" "}
                    {incident.description || "NOT AVAILABLE"}
                  </p>
                </div>
                <div className="date-details">
                  <span>
                    <strong className="text-red">Stolen on </strong>{" "}
                    {new Date(incident.occurred_at * 1000)
                      .toUTCString()
                      .slice(0, 16)}
                    <strong className="text-red"> at </strong>
                    {new Date(incident.occurred_at * 1000)
                      .toLocaleTimeString()
                      .replace(/:.* /, "")
                      .toLowerCase()}
                  </span>
                  <br />
                  <span>
                    <strong>Location </strong>
                    {incident.address.replace(/,.* /, " - ")}
                  </span>
                  <br />
                  <span>
                    <strong className="text-green">Reported on </strong>{" "}
                    {new Date(incident.updated_at * 1000)
                      .toUTCString()
                      .slice(0, 16)}
                    <strong className="text-green"> at </strong>
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
      </div>
    );
  }
}

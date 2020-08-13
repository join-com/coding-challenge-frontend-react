import React, { useState, useEffect } from "react";
import axios from "axios";

import ApiConfig from "../utils/config/ApiConfig";
import HelperUtils from "../utils/helper/HelperUtils";

import Bike from "../bike.png";
import Loader from "../loader.gif";

export default ({ match }) => {
  useEffect(() => {
    fetchDetails();
  }, []);

  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  const fetchDetails = async () => {
    await axios
      .get(ApiConfig.incidents + `${match.params.id}`)
      .then((res) => res.data)
      .then((data) => {
        if (data) {
          console.log(data.incident);
          const details = data.incident;
          setDetails(details);
        } else {
          setMessage(HelperUtils.message.Empty);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage(HelperUtils.message.Error);
      });
    setLoading(false);
  };

  return (
    <div className="container">
      {/* Error Message */}
      {message && <p className="message display-4">{message}</p>}

      {/* loader */}
      <img
        src={Loader}
        className={`search-loading ${loading ? "show" : "hide"}`}
        alt="loader"
      />

      {!loading && (
        <div className="animate__animated animate__fadeInLeft">
          <strong className="h4 text-danger">STOLEN</strong>
          <h3 className="bike-name display-4 text-secondary">
            {details.title.slice(7).split(/[()]/)[0]}
          </h3>
          <h3 className="h6 text-white bg-dark p-2 rounded w-100">
            {" "}
            {details.address || "Not Available"}
          </h3>
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                src={
                  details.media.image_url ||
                  details.media.image_url_thumb ||
                  Bike
                }
                alt="Not Found"
                className="w-100"
              />
            </div>
            <div className="col-12 col-md-6">
              <p>
                <strong className="h5 text-secondary">Description: </strong>{" "}
                {details.description || "Not Available"}
              </p>
              <p className="text-capitalize">
                <strong className="h5 text-secondary">Primary Colors: </strong>{" "}
                {details.title.split(/[()]/)[1] || "NOT AVAILABLE"}
              </p>
              <p>
                <strong className="h5 text-secondary">Date Stolen: </strong>{" "}
                {new Date(details.occurred_at * 1000).toDateString()}
              </p>
              <p>
                <strong className="h5 text-secondary">Date Reported: </strong>{" "}
                {new Date(details.updated_at * 1000).toDateString()}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { getBikeInfo } from "./api";
import Gmap from './renderMap';



const RenderItemDescription = props => {
  let ItemObj = props.location.myCustomProps
    ? props.location.myCustomProps.item
    : {};
  console.log("Item obj" + JSON.stringify(ItemObj));

  const [bikeInfo, setbikeInfo] = useState({});

  let idFromParam = props.match.params.id;
  useEffect(() => {
    if (ItemObj.id || idFromParam) {
      getBikeInfo(ItemObj.id ? ItemObj.id : idFromParam) .then(response => {
        console.log("bike info obj" + JSON.stringify(response));
        setbikeInfo(response);
      });
    }
  }, [ItemObj.id]);

  return (
    <div className="container">
      <div className="ItemInfo">
        <h4 className="stolentitle">
          STOLEN
        </h4>
        <h2 className="title is-2">
          {ItemObj.title ? ItemObj.title : "No Title"}
        </h2>
      </div>
      <div className="bikeInfoContainer">
        <span>
          <b>Stolen: </b>
          {bikeInfo.stolen_record
            ? new Date(bikeInfo.stolen_record.date_stolen).toLocaleDateString()
            : "Not Available"}
        </span>
        <b> At:</b>{" "}
        <span>
          {bikeInfo.stolen_record ? bikeInfo.stolen_record.location : "Not Available"}
        </span>
        <div className="bikeImg">
          <img src={ItemObj.media ? ItemObj.media.image_url : null} alt="" />
        </div>
        <p>Description: {bikeInfo.description ? bikeInfo.description : 'Not Available'}</p>
        <div className="columns">
          <div className="column is-half">
            <p>
              <b>Serial:</b> {bikeInfo.serial ? bikeInfo.serial : "Not Available"}
            </p>
            <p>
              <b>Manufacturer: </b>
              {bikeInfo.manufacturer_name
                ? bikeInfo.manufacturer_name
                : "Not Available"}
            </p>
            <p>
              <b>Model:</b>{" "}
              {bikeInfo.frame_model ? bikeInfo.frame_model : "Not Available"}
            </p>
            <p>
              <b>Primary colors:</b>{" "}
              {bikeInfo.frame_colors ? bikeInfo.frame_colors : "Not Available"}
            </p>
            <p>
              <b>Frame Material:</b>{" "}
              {bikeInfo.frame_material ? bikeInfo.frame_material : "Not Available"}
            </p>
          </div>
          <div className="column is-half">
            <p>
              <b>Other serial/registration/sticker:</b>{" "}
              {bikeInfo.serial ? bikeInfo.serial : "Not Available"}
            </p>
            <p>
              <b>Name:</b> {bikeInfo.name ? bikeInfo.name : "Not Available"}
            </p>
            <p>
              <b>Year:</b> {bikeInfo.year ? bikeInfo.year : "Not Available"}
            </p>
            <p>
              <b>Frame size:</b>{" "}
              {bikeInfo.frame_size ? bikeInfo.frame_size : "Not Available"}
            </p>
          </div>
        </div>
      </div>

      <div className="theftInformation">
        <h3>THEFT DETAILS</h3>
        <div className="columns">
          <div className="column is-4">
            <Gmap lat={bikeInfo.stolen_record ? bikeInfo.stolen_record.latitude : 0} lng={bikeInfo.stolen_record ? bikeInfo.stolen_record.longitude : 0} />
          </div>
          <div className="column is-8">
            <label><b>Location</b></label>
            <p>{ItemObj.address}</p>
            <label><b>Date Stolen</b></label>
            <p>{new Date(ItemObj.properties ? ItemObj.properties.occurred_at : null).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RenderItemDescription;

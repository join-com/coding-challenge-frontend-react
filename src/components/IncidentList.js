import React from 'react';
import styles from "../assets/style/style.css";

const IncidentList = props => {

    console.log(props.incidents);
    const incidents = props.itemsPerPage.map((incident) => {
        return (<div className="item" key={incident.id} onClick={() => { props.onItemClick(incident); }}>
            <div className="image">
                <img icon="bicycle" src={incident.media.image_url_thumb ? incident.media.image_url_thumb : require('../assets/images/not-found-bike.png')} />
            </div>
            <div className="content">
                <a className="header">{incident.title}</a>
                <div className="meta">
                    <span><strong>Description of theft: </strong> </span>
                    <span>{incident.description ? incident.description : "Not Available"}</span>
                </div>
                <div className="meta">
                    <span><strong>Date of theft: </strong> </span>
                    <span>{incident.occurred_at ? new Date(incident.occurred_at * 1000).toUTCString().substr(0, 16) : "Not Available"}</span>
                </div>

                <div className="meta">
                    <span><strong>Location of theft: </strong></span>
                    <span>{incident.address ? incident.address : "Not Available"}</span>
                </div>
                <div className="description">
                    <p></p>
                </div>
                <div className="extra">
                    Additional Details
          </div>
            </div>



        </div>)
    });

    return <div className="ui divided items">{incidents}</div>

};

export default IncidentList; 
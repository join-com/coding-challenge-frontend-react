import React from 'react';
import "../assets/style/style.css";

const IncidentList = props => {
    const incidents = props.itemsPerPage.map((incident) => {

        return (
            <div className="item incident" key={incident.id} onClick={() => { props.onItemClick(incident); }}>
                <div className="image">
                    <img icon="bicycle" alt="bike" src={incident.media.image_url_thumb ? incident.media.image_url_thumb : require('../assets/images/not-found-bike.png')} />
                </div>
                <div className="content">
                    <a className="header" href="#">{incident.title ? incident.title : "Title Not Available"}</a>
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
                </div>
            </div>)
    });

    return <div className="ui divided items">{incidents}</div>

};

export default IncidentList; 
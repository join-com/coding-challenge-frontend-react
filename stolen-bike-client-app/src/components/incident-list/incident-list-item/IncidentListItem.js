import React, { Component } from 'react';
import './IncidentListItem.scss';
import Bike from '../../../assets/bykes/default.svg';

class IncidentListItem extends Component {
    constructor(props) {
        super(props);
    }

    timeConverter = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    render() {
        const {
            incident,
            togglePopup
        } = this.props;
        return (
            <div onClick={() => togglePopup(incident.id)} className="listItem">
                <div className="listItem__img">
                    {incident.media.image_url_thumb
                        ? <img alt="" src={incident.media.image_url_thumb} />
                        : <img alt="" src={Bike} />
                    }
                </div>
                <div className="listItem__content">
                    <div className="listItem__content__title">{incident.title}</div>
                    <div className="listItem__content__others">{incident.description}</div>
                    <div className="listItem__content__footer">
                        <div className="listItem__content__others">Stolen: <strong>{this.timeConverter(incident.occurred_at)} at {incident.address}</strong></div>
                        <div className="listItem__content__others">Reported: <strong>{this.timeConverter(incident.updated_at)}</strong></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IncidentListItem;

import React from 'react';
import './IncidentListItem.scss';
import Bike from '../../../assets/bykes/default.svg';

const timeConverter = (UNIX_timestamp) => {
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

const IncidentListItem = ({ incident }) => {
    return (
        <div className="listItem">
            {/* <img className="inputIco" alt="" src={item.img} />
            id(pin): 97966
            title(pin): "Sign Maintenance"
            description(pin): "The sign that used to be in the triangle shape area on north side of road where west bound Skyline merges with west bound Sunrise was evidently run over - it lay on the ground there several days and now is gone all together. Do you want to put a new sign there? This is near where those two god awful speed humps are for vehicles before crossing the bike lane while merging onto west bound Sunrise off of Skyline. "
            address(pin): "3780 East Sunrise Drive Tucson, AZ"
            occurred_at(pin): 1553205821
            updated_at(pin): 1553276022
            url(pin): "https://bikewise.org/api/v1/incidents/97966"
            location_type(pin): null
            location_description(pin): null
            type(pin): "Unconfirmed"
            type_properties(pin): null
                */}
            <div className="listItem__img">
                {incident.media.image_url_thumb
                    ? <img className="inputIco" alt="" src={incident.media.image_url_thumb} />
                    : <img className="inputIco" alt="" src={Bike} />
                }
            </div>
            <div className="listItem__content">
                <div className="listItem__content__title">{incident.title}</div>
                <div className="listItem__content__others">{incident.description}</div>
                <div className="listItem__content__footer">
                    <div className="listItem__content__others">Stolen: <strong>{timeConverter(incident.occurred_at)} at {incident.address}</strong></div>
                    <div className="listItem__content__others">Reported: <strong>{timeConverter(incident.updated_at)}</strong></div>
                </div>
            </div>
        </div>
    );
}

export default IncidentListItem;

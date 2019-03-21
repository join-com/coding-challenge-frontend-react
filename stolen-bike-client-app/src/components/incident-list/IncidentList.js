import React, { Component } from 'react';
import './IncidentList.scss';

import IncidentListItem from './incident-list-item/IncidentListItem';

class IncidentList extends Component {
    render() {
        return (
            <div className="sectWrap">
                <IncidentListItem />
            </div>
        );
    }
}

export default IncidentList;

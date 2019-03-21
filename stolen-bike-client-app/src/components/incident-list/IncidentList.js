import React, { Component } from 'react';
import './IncidentList.scss';

import IncidentListItem from './incident-list-item/IncidentListItem';
import Pagination from '../common/pagination/Pagination';

class IncidentList extends Component {
    render() {
        return (
            <div className="sectWrap">
                <div className="sectWrap__header--controls">
                    <Pagination />
                </div>
                <div className="sectWrap__header--title"></div>
                <IncidentListItem />
            </div>
        );
    }
}

export default IncidentList;

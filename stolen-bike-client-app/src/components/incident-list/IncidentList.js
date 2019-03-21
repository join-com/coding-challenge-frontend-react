import React, { Component } from 'react';
import './IncidentList.scss';

import IncidentListItem from './incident-list-item/IncidentListItem';
import Pagination from '../common/pagination/Pagination';
import SearchInput from '../common/search-input/SearchInput';


import SearchICO from '../../assets/icons/search.svg'

class IncidentList extends Component {
    render() {
        return (
            <div className="sectWrap">
                <div className="sectWrap__header--controls">
                    <Pagination />
                    <SearchInput
                        name="listSearch"
                        placeholder="...search for case title"
                        value=""
                        icon={SearchICO}
                        label={null}
                        error={null}
                        type="search"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="sectWrap__header--title"></div>
                <IncidentListItem />
            </div>
        );
    }
}

export default IncidentList;

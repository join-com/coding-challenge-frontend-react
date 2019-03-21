import React, { Component } from 'react';
import './Pagination.scss';

import AngleLeftIco from '../../../assets/icons/angle-left.svg'
import AngleRightIco from '../../../assets/icons/angle-right.svg'

class Pagination extends Component {
    render() {
        return (
            <div className="list-pagination">
                <span>
                    showing page 1 out of 100 pages
                </span>
                <img alt="" onClick={this.prev} src={AngleLeftIco} />
                <img alt="" onClick={this.next} src={AngleRightIco} />
            </div>
        );
    }
}

export default Pagination;

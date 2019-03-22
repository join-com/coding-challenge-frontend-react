import React, { Component } from 'react';
import './Pagination.scss';

import AngleLeftIco from '../../../assets/icons/angle-left.svg'
import AngleRightIco from '../../../assets/icons/angle-right.svg'

class Pagination extends Component {
    render() {
        const { pagination_data, prev, next } = this.props;
        return (
            <div className="list-pagination">
                <span>
                    showing page {pagination_data.currentPage} out of {pagination_data.totalPages} pages
                </span>
                <img alt="" onClick={prev} src={AngleLeftIco} />
                <img alt="" onClick={next} src={AngleRightIco} />
            </div>
        );
    }
}

export default Pagination;

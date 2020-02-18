import React from 'react';
import './Pagination.css';

export default class Pagination extends React.Component {
  setCases(o) {
    this.props.setCases(o);
  }

  render() {
    let pageNums = [];

    for (let i = 1; i <= this.props.numPages; i++) {
      pageNums.push(i);
    }

    return (
      <ul className="pagination">
        <li key="First" className={this.props.currPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={this.setCases.bind(this, { pageNum: 1 })}>
            &laquo; First
          </a>
        </li>
        <li key="Previous" className={this.props.currPage === 1 ? 'page-item disabled' : 'page-item'}>
          <a className="page-link" onClick={this.setCases.bind(this, { pageNum: this.props.currPage - 1 })}>
            ‹ Previous
          </a>
        </li>
        {pageNums.map((pageNum) =>
          <li key={pageNum} className={this.props.currPage === pageNum ? 'page-item active' : 'page-item'}>
            <a className="page-link" onClick={this.setCases.bind(this, { pageNum: pageNum })}>
              {pageNum}
            </a>
          </li>
        )}
        <li key="Next" className="page-item">
          <a className="page-link" onClick={this.setCases.bind(this, { pageNum: this.props.currPage + 1 })}>
            Next ›
          </a>
        </li>
        <li key="Last" className="page-item">
          <a className="page-link" onClick={this.setCases.bind(this, { pageNum: this.props.numPages })}>
            Last &raquo;
          </a>
        </li>
      </ul>
    )
  }
}

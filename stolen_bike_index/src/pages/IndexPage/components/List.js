import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllIncidentsRequest } from "../../../redux/actions/get_all_incidents.actions";
import { countAllIncidentsRequest } from "../../../redux/actions/count_all_incidents.actions";
import { Card, Pagination, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { styles } from "../styles/List.styles";
import Moment from 'react-moment';
import no_image from '../../../images/no-image-icon-15.png';
import injectSheet from 'react-jss';

const mapStateToProps = state => {
  const { incidents, loading, total, error, page, isSearch } = state.Incidents_reducer;
  return { incidents, loading, total, error, page, isSearch };
}, { Meta } = Card;

export default injectSheet(styles)(connect(mapStateToProps, null)(class List extends Component {
  componentDidMount() {
    this.props.dispatch(getAllIncidentsRequest(1));
    this.props.dispatch(countAllIncidentsRequest());
  }

  showIncidents = page => {
    !this.props.isSearch ?
      this.props.dispatch(getAllIncidentsRequest(page)) :
      this.props.dispatch({ type: 'CUSTOM_PAGINATION', page });
  };

  render() {
    const { incidents, loading, total, error, page, isSearch, classes } = this.props;
    return incidents ?
        <>
          <Pagination
            className={classes.pagination_position}
            total={total || incidents.length}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} incidents`}
            pageSize={10}
            onChange={this.showIncidents}
            defaultCurrent={1} />
          <Spin spinning={loading} tip="Loading...">
            {incidents.length ?
              incidents.slice(isSearch && 10 * page - 10, 10 * page).map(incident => (
                  <Card key={incident.id} hoverable className={classes.card_position}>
                    <Meta
                      avatar={incident.media.image_url_thumb ?
                        <img className={classes.img_size} src={incident.media.image_url_thumb} alt='avatar'/> :
                        <img className={classes.img_size} src={no_image} alt='no-avatar'/>}
                      title={<a href={incident.source.html_url} rel="noopener noreferrer" target='_blank'>{incident.title}</a>}
                      description={incident.description ?
                        incident.description :
                        <span className={classes.italicStyle}>No Description</span>}/>
                    <span>
                    <Moment unix format='YYYY-MM-DD HH:mm'>{incident.occurred_at}</Moment> - {incident.address}
                  </span>
                    <Link to={`/${incident.id}`} className={classes.float_right}>Details</Link>
                  </Card>
              )
            ) : <span className={classes.no_result}>No Results</span>}
          </Spin>
          </> : <span className={classes.error_message}>{error}</span>
  }
}));


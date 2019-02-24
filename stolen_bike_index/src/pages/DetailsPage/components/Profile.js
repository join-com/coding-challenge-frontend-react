import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin, Button } from 'antd';
import { getIncidentByIdRequest } from "../../../redux/actions/get_incident_by_id.actions";
import { styles } from "../styles/Profile.styles";
import Moment from 'react-moment';
import GoogleMapReact from 'google-map-react';
import injectSheet from 'react-jss';

const mapStateToProps = state => {
  const { profile, loading } = state.Profile;
  return { profile, loading };
}, MapsView = props => <div className={props.classes.default_center_position}>{props.text}</div>;

export default injectSheet(styles)(connect(mapStateToProps, null)(class Profile extends Component {

  componentDidMount() {
    this.props.dispatch(getIncidentByIdRequest(+this.props.id.replace(/\//g,'')));
  }

  render() {
    const { classes, profile, loading } = this.props;
    return (
      profile ?
        <Spin spinning={loading} tip="Loading...">
          <div className={classes.row_position}>
            <h1>{profile.title}</h1>
            <h4><Moment unix format='YYYY-MM-DD HH:mm'>{profile.occurred_at}</Moment> at {profile.address}</h4>
            <div className={classes.map_container}>
            <GoogleMapReact
              defaultCenter={{ lat: profile.coordinates[1], lng: profile.coordinates[0] }}
              defaultZoom={11}>
              <MapsView
                lat={profile.coordinates[1]}
                lng={profile.coordinates[0]}
                classes={classes}
                text={'A'} />
            </GoogleMapReact>
            </div>
            <h2>Description of Incident:</h2>
            <h4>{profile.description ? profile.description: 'No Description'}</h4>
            <Button style={{ float: 'right' }}><Link to='/'>Back</Link></Button>
          </div>
        </Spin> :
        <Spin tip="Loading...">
          <div style={{minHeight: '60vh'}}/>
        </Spin>
    );
  }
}));


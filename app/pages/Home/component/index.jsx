import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

import ItemsList from '../ItemsList';
import CriteriaForm from '../CriteriaForm';

class HomePage extends React.Component {
  componentDidMount() {
    this.props.search();
  }

  render() {
    const {loading, error, items} = this.props;

    return (
      <div>
        <CriteriaForm/>
        <Paper elevation={1}>
          <ItemsList {...{loading, error, items}} />
        </Paper>
        <br />
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  items: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

export default HomePage;

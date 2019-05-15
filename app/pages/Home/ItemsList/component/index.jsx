import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Error from '../../../../atoms/Error';
import LoadingIndicator from '../../../../molecules/LoadingIndicator';
import messages from './messages';

const getListItems = items => (
  <List>
    {items.map((item, key) => (
      <ListItem key={key}>
        <ListItemText primary={item.full_name} />
      </ListItem>
    ))}
  </List>
);

const ItemsList = ({ loading, error, items }) => {
  if(loading || (items !== false)) {
    return loading ? <LoadingIndicator /> : getListItems(items);
  }

  return error !== false ? <Error><FormattedMessage {...messages.somethingWrong} /></Error> : null;
};

ItemsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.any,
};

export default ItemsList;

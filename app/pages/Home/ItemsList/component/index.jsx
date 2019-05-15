import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';

import Error from '../../../../atoms/Error';
import LoadingIndicator from '../../../../molecules/LoadingIndicator';
import messages from './messages';

const styles = {
  avatar: {
    margin: 10,
    width: 240,
    height: 240,
  },
};

const getListItems = items => (
  <List>
    {items.map((item, key) => (
      <ListItem key={key}>
        <ListItemAvatar>
          <Avatar style={styles.avatar} src={item.media.image_url_thumb}>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={item.title} secondary={
          <React.Fragment>
            <Typography component="span" color="textPrimary">
              {moment(item.occurred_at).format('lll')}
              &nbsp;
              {item.address}
            </Typography>
            <div>{item.description}</div>
            <Typography component="span" color="textPrimary">
              Reported: {moment(item.updated_at).format('lll')}
            </Typography>
          </React.Fragment>
        } />
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

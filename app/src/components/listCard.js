import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import moment from 'moment';

function ListCard({ incident }) {
  return (
    <Box bgcolor="white" p={3} border={1} marginTop={2} display="flex">
      <Box>
        <img
          src={incident.media.image_url_thumb || incident.media.image_url}
          alt=""
          width="150px"
          height="150px"
        />
      </Box>
      <Box marginLeft={2}>
        <Typography variant="h6">
          <Link href={`/case/${incident.id}`}>{incident.title}</Link>
        </Typography>
        <Typography variant="h6">{incident.description}</Typography>
        <Typography variant="h6">
          {moment(incident.occured_at).format('ddd MMM DD YYYY')} -{' '}
          {incident.address}
        </Typography>
      </Box>
    </Box>
  );
}

export default ListCard;

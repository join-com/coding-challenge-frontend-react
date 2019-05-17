import React from 'react'
import moment from 'moment'
import ModalImage from 'react-modal-image'
import { withStyles, createStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

import { Report } from '../modules/interfaces'

import NoBicycleThumb from '../assets/images/bicycle.png'

const styles = (theme: any) => createStyles({
  loadingText: {
    opacity: .8,
  },
  errorText: {
    color: 'red',
  },
  item: {
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    fontSize: theme.typography.pxToRem(20),
    display: 'block',
    marginBottom: 8,
  },
  thumb: {
    width: '90%',
    height: 'auto',
  },
  content: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  metaInfo: {
    marginTop: 8,
  }
});

interface DataProps {
  classes: {
    loadingText: string
    errorText: string
    thumb: string
    title: string
    content: string
    item: string
    metaInfo: string
  }
  data: Report[]
  page: number
  isLoading: boolean
  error: boolean
}

class DataComponent extends React.Component<DataProps> {
  getImage(item: Report) {
    if (item.media.image_url_thumb) {
      return (
        <ModalImage
          alt={item.title}
          className={this.props.classes.thumb}
          small={item.media.image_url_thumb}
          large={item.media.image_url}
        />
      )
    }

    return (
      <img src={NoBicycleThumb} alt={item.title} className={this.props.classes.thumb} />
    )
  }
  render() {
    const { classes, isLoading, data, page, error } = this.props;
    const displayedData = data.slice((page - 1) * 10, page * 10);

    if (isLoading) {
      return (
        <Typography className={classes.loadingText}>
          Loading...
        </Typography>
      )
    }

    if (error) {
      return (
        <Typography className={classes.errorText}>
          An error occurred.
        </Typography>
      )
    }

    if (data.length === 0) {
      return (
        <Typography>
          Nothing was found.
        </Typography>
      )
    }

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography align='right'>
            Total: {data.length === 1001 ? '1000+' : data.length}
          </Typography>
        </Grid>
        {
          displayedData.map((item: Report) => (
            <Grid container className={classes.item}>
              <Grid item xs={2} sm={3}>
                { this.getImage(item) }
              </Grid>
              <Grid item xs={10} sm={9} className={classes.content}>
                <Link href={item.url} className={classes.title}>
                  {item.title}
                </Link>
                <Typography>
                  {item.description}
                </Typography>
                <Grid container>
                  <Grid item xs={6} sm={4}>
                    <Typography className={classes.metaInfo}>
                      Occurred at: {moment(item.occurred_at * 1000).format('DD.MM.YYYY hh:mm')}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography className={classes.metaInfo}>
                      Updated at: {moment(item.updated_at * 1000).format('DD.MM.YYYY hh:mm')}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <Typography className={classes.metaInfo}>
                      Location: {item.address}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))
        }
      </Grid>
    )
  }
}

export default withStyles(styles)(DataComponent);

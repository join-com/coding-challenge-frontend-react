import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { styles } from '../searchFilters/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import ReactTooltip from 'react-tooltip'

function dateFormater(stamp) {
    let formatedDate = moment(stamp * 1000).format("LL");
    return formatedDate
}

class BikeCard extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div >
                <Card className={`${classes.card} fullWidth stripped`}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Grid container>
                                <Grid xl={2}>
                                    <a data-tip data-for={`bike-${this.props.data.id}`}>
                                        <CardMedia
                                            className={classes.cover}
                                            component="img"
                                            src={this.props.data.media.image_url_thumb || "https://image.flaticon.com/icons/svg/130/130276.svg"}
                                        />
                                        <ReactTooltip
                                            id={`bike-${this.props.data.id}`}
                                            aria-haspopup='true'
                                            place="right"
                                            type="light"
                                            effect="float"
                                            className={classes.imgHover}
                                        >
                                            <img src={this.props.data.media.image_url} />
                                            <Typography component="h5" variant="h5" >
                                                {this.props.data.title || ""}
                                            </Typography>
                                        </ReactTooltip>
                                    </a>
                                </Grid>
                                <Grid xl={10}>
                                    <div className="cardParent mg-10">
                                        <Typography component="h5" variant="h5" color="primary" >
                                            {this.props.data.title || ""}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary" className="cardChild">
                                            {this.props.data.description || ""}
                                        </Typography>
                                        <Grid container>
                                            <Grid item md={6} sm={12} ><span className={classes.cardFooterContent}>Location :</span> {this.props.data.address} </Grid>
                                            <Grid item md={3} sm={12}><span className={classes.cardFooterContent}>Stolen on :</span> {dateFormater(this.props.data.occurred_at)} </Grid>
                                            <Grid item md={3} sm={12}><span className={classes.cardFooterContent}>Case Reported on :</span> {dateFormater(this.props.data.updated_at)} </Grid>
                                        </Grid>
                                    </div>

                                </Grid>
                            </Grid>


                        </CardContent>
                    </div>

                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(BikeCard);

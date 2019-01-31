import React, { Component } from 'react'
import { styles } from './styles'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateRange from '@material-ui/icons/DateRange';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class SearchFilters extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      dateTo: '',
      dateFrom: ''
    }
  }

  handleSearchChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }
  handleDateToChange = (date) => {
    this.setState({
      dateTo: date || ''
    })
  }
  handleDateFromChange = (date) => {
    this.setState({
      dateFrom: date || ''
    })
  }

  searchBtnClick = () => {
    this.props.handleSearch(this.state)
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main}>
        <Grid container direction="row" spacing={12}>
          <Grid item xl={10} md={10} sm={10} xs={12} className={classes.gridPad} >
            <Grid item xl={12} md={12} sm={12}>
              <input
                className="defaultInputs fullWidth"
                type="text"
                placeholder="Search case description"
                value={this.state.search}
                onChange={this.handleSearchChange}
              />
            </Grid>
            <Grid container >
              <Grid item xl={6} md={6} sm={6} xs={12} className={classes.gridPadInner} >
                <div className="datePicker">
                  <DatePicker
                    selected={this.state.dateFrom}
                    onChange={this.handleDateFromChange}
                    maxDate={new Date()}
                    placeholderText="From"
                    className="datePicker"
                  />
                  <DateRange className={classes.dateRangeIcon} />
                </div>
              </Grid>
              <Grid item xl={6} md={6} sm={6} xs={12} className={classes.gridPadInner} >

                <div className="datePicker fr">
                  <DatePicker
                    selected={this.state.dateTo}
                    onChange={this.handleDateToChange}
                    maxDate={new Date()}
                    placeholderText="To"

                  />
                  <DateRange className={classes.dateRangeIcon} />
                </div>

              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={2} md={2} className={classes.gridPad} >
            <Button
              variant="contained"
              size="large"
              color="primary"
              id="search-button"
              className={classes.searchBtn}
              onClick={this.searchBtnClick}
            >
              <SearchIcon className={classes.searchIcon} />
            </Button>
          </Grid>
        </Grid>

      </div>
    )
  }
}


SearchFilters.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default withStyles(styles)(SearchFilters);

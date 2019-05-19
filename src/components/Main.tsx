import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import Filters from '../containers/Filters'
import Data from '../containers/Data'
import Pagination from '../containers/Pagination'

interface MainProps {
  history?: {
    push: any
    location: {
      search: string
    }
  }
  match?: {
    params: {
      page?: string
    }
  }
}

export default class Main extends Component<MainProps> {
  render() {
    return (
      <Grid container>
        <Filters
          history={this.props.history}
        />
        <Data
          page={(this.props.match && this.props.match.params.page) ? parseInt(this.props.match.params.page, 10) : 1}
        />
        <Pagination
          history={this.props.history}
          page={(this.props.match && this.props.match.params.page) ? parseInt(this.props.match.params.page, 10) : 1}
        />
      </Grid>
    );
  }
}

import React from 'react';
import axios from 'axios';
import Pagination from 'rc-pagination';
import {
  Button, Form, FormGroup, Input
} from 'reactstrap';
import APP_CONFIG from '../constants';
import localeInfo from 'rc-pagination/lib/locale/en_US';
import IncidentItem from './IncidentItem';
import 'rc-pagination/assets/index.css';
import './Incidents.css';


class Incidents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isError: false,
      incidents: [],
      page: 1,
      query: '',
    };
    this.handler = {};
    this.getIncidents = this.getIncidents.bind(this);
    this.onPageChange = page => {
      this.setState({page});
    }
    this.handleChange = field => {
      if(this.handler[field]) {
        return this.handler[field];
      }
      this.handler[field] = e => this.setState({[field]: e.target.value});
      return this.handler[field];
    }
  }

  componentDidMount() {
    this.getIncidents();
  }

  getIncidents(e) {
    if (e) {
      e.preventDefault();
    }
    const {
      page, query
    } = this.state;

    const params = {
      page,
      proximity: 'Berlin',
      incident_type: 'theft',
    };

    if(query) {
      params.query = query;
    }

    this.setState({isLoading: true});

    axios.get(`${APP_CONFIG.API_URL}incidents`, {
      params
    })
    .then((response) => {
      this.setState({
        isLoading: false,
        incidents: response.data.incidents.map(ele => ({
          ...ele,
          occurred_at: ele.occurred_at * 1000,
          updated_at: ele.updated_at * 1000,
        })),
      });
    })
    .catch(() => {
      this.setState({
        isLoading: false,
        isError: true,
      });
    });
  }

  render() {
    const {
      isError, isLoading,
      incidents,
      page, query,
    } = this.state;

    const start = (page-1)*APP_CONFIG.RECORDS_PER_PAGE;

    const Section = () => (
      <div>
        <div className="text-right">Total: {incidents.length}</div>
        {incidents.length > 0
          ? incidents.slice(start, start + APP_CONFIG.RECORDS_PER_PAGE).map(ele => <IncidentItem key={ele.id} {...ele} />)
          : <div>No results found</div>}
        {incidents.length > APP_CONFIG.RECORDS_PER_PAGE
          ?  <Pagination
                className="ant-pagination"
                onChange={this.onPageChange}
                current={page}
                total={incidents.length}
                locale={localeInfo}
              />
          : null}
      </div>
    );

    return (
      <div>
        <Form inline className="filterForm" onSubmit={this.getIncidents}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input value={query} placeholder="Search incident descriptions" onChange={this.handleChange('query')} />
          </FormGroup>
          <Button type="submit" onClick={this.getIncidents}>Find incidents</Button>
        </Form>
        {isError && !isLoading ? <div className="text-danger">Something went wrong.</div>: null}
        {!isError && isLoading ? <div>Loading...</div> : null}
        {!isError && !isLoading ? <Section /> : null}
      </div>
    );
  }
}

export default Incidents;

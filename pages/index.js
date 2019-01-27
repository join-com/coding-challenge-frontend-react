import 'rc-pagination/assets/index.css';
import axios from 'axios';
import Pagination from 'rc-pagination';
import APP_CONFIG from '../constants';
import {
  Layout,
  Incidents,
  Error
} from '../components/ComponentLib';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isError: false,
      incidents: [],
      page: 1,
      total: 0,
      query: '',
    };

    this.directSetState = state => {
      this.setState(state, () => this.getIncidents());
    };
    this.handlePageChange = p => this.directSetState({page: p});
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
    this.getIncidents();
  }

  getIncidents() {
    const {
      page, query,
    } = this.state;

    this.setState({
      isLoading: true,
      incidents: []
    }, () => {
      axios.get(`${APP_CONFIG.API_URL}incidents`, {
        params: {
          page,
          per_page: APP_CONFIG.RECORDS_PER_PAGE,
          proximity: APP_CONFIG.APP_CITY,
          incident_type: 'theft',
          query
        }
      })
      .then((response) => {
        this.setState({
          isLoading: false,
          incidents: response.data.incidents.map(ele => ({
            ...ele,
            occurred_at: ele.occurred_at * 1000,
            updated_at: ele.updated_at * 1000,
          })),
          total: 23, // TODO: Pending from backend.
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
    });    
  }

  onSearch(params) {
    this.setState({
      query: params.query,
    }, () => this.getIncidents());
  }

  render() {
    const {
      isLoading,
      isError,
      incidents,
      total, page,
    } = this.state;
    
    return (
      <Layout onSearch={this.onSearch}>
          {isError ? <Error text="Something went wrong." /> : null}
          {!isError && isLoading ? <div>Loading...</div> : null}
          {incidents.length === 0 && !isLoading && !isError ? <div>No Results</div> : null}
          {!isError && !isLoading
            ? <Incidents
              total={total}
              incidents={incidents}
              onPageChange={this.directSetState}
              page={page}
            />
            : null}
            <Pagination
              className="ant-pagination"
              onChange={this.handlePageChange}
              current={page}
              total={total}
            />
      </Layout>
    );
  }
}
export default Index
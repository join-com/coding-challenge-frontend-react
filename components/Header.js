import { Media } from 'reactstrap';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import APP_CONFIG from '../constants';

const logoStyle = {
  marginRight: 10
};

const appHeading = {
  fontSize: 45
}

const appSubHeading = {
  fontSize: 25
}

const formStyle = {
  margin: '10px 0',
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onFieldChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  onSearch() {
    this.props.onSearch(this.state);
  }

  render() {
    const {
      query,
    } = this.state;
  
    return (
      <div>
        <Media>
          <Media middle  href="#" style={logoStyle}>
            <img src="https://via.placeholder.com/100" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading style={appHeading}>
              {`${APP_CONFIG.APP_TITLE} ${APP_CONFIG.APP_CITY}`}
            </Media>
            <div style={appSubHeading}>Stolen bykes</div>
          </Media>
        </Media>
        <Form inline style={formStyle}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input value={query} placeholder="Search incident descriptions" onChange={this.onFieldChange} />
          </FormGroup>
          <Button onClick={this.onSearch}>Find incidents</Button>
        </Form>
      </div>
    );
  }
}

export default Header
import {withRouter} from 'next/router';
import {Layout} from '../components/ComponentLib';

const Case = withRouter((props) => (
    <Layout>
      <p>{props.router.query.id}</p>
    </Layout>
  ))
  
  export default Case
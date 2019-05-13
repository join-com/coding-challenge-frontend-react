/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';

import LoadingIndicator from '../../molecules/LoadingIndicator';

export default Loadable({
  loader: () => import('./container'),
  loading: LoadingIndicator,
});

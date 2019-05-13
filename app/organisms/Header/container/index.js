import { injectIntl } from 'react-intl';

import setAuthenticatedProp from '../../../utils/authenticated';
import Header from '../component';

export default setAuthenticatedProp(injectIntl(Header));

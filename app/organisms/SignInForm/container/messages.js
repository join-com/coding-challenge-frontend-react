import { defineMessages } from 'react-intl';

import {
  ERRORS_PREFIX,
  EMPTY_PASSWORD,
  FORM_SUBMISSION_FAILED,
  INCORRECT_CREDENTIALS,
  INVALID_EMAIL,
} from '../../../store/auth/constants';

const messagesData = {};

[
  EMPTY_PASSWORD,
  FORM_SUBMISSION_FAILED,
  INCORRECT_CREDENTIALS,
  INVALID_EMAIL,
].forEach((message) => {
  messagesData[message] = {
    id: `${ERRORS_PREFIX}.${message}`,
    defaultMessage: message,
  };
});

export default defineMessages(messagesData);

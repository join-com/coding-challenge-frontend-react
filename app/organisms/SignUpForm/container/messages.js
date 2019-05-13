import { defineMessages } from 'react-intl';

import {
  ERRORS_PREFIX,
  DUPLICATED_EMAIL,
  FORM_SUBMISSION_FAILED,
  INCORRECT_CREDENTIALS,
  INVALID_EMAIL,
  INVALID_NAME,
  INVALID_PASSWORD,
} from '../../../store/auth/constants';

const messagesData = {};

[
  DUPLICATED_EMAIL,
  FORM_SUBMISSION_FAILED,
  INCORRECT_CREDENTIALS,
  INVALID_EMAIL,
  INVALID_NAME,
  INVALID_PASSWORD,
].forEach((message) => {
  messagesData[message] = {
    id: `${ERRORS_PREFIX}.${message}`,
    defaultMessage: message,
  };
});

export default defineMessages(messagesData);

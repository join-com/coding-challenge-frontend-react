import { FormattedMessage, IntlProvider } from 'react-intl';

export function checkTranslation(message, id, defaultText) {
  expect(message.type()).toEqual(FormattedMessage);
  expect(message.prop('id')).toBe(id);
  expect(message.prop('defaultMessage')).toBe(defaultText);
}

export function getIntl(translate = (messageData) => messageData.defaultMessage) {
  const intlProvider = new IntlProvider({ locale: 'en', messages: {} }, {});
  const { intl } = intlProvider.getChildContext();
  intl.formatMessage = translate;
  return intl;
}

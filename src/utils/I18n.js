const translations = {
  en: {
    actions: {
      back: 'Back',
      ok: 'OK',
    },
    data: {
      actions: {
        loading: 'Loading data ...',
      },
      title: 'Stolen Bikes in Berlin',
      states: {
        empty: 'No data available.',
        error: {
          400: 'Bad Request',
          404: 'Not found',
          422: 'Unprocessable Entities',
          500: 'Internal server error',
          loading: 'Oops something went wrong :(',
        },
      },
    },
    route: {
      notFound: 'Unfortunately, the requested route does not exist.',
    },
    title: 'Police Department of Berlin',
  },
};

class I18n {
  static t(keyString, options = {}) {
    function findTranslation(keys, translationObject, keyPath) {
      if (!keys.length) {
        // Replace options values in translation
        return Object.keys(options).reduce((translation, key) => {
          const option = new RegExp(`%{${key}}`, 'g');
          return translation.replace(option, options[key]);
        }, translationObject);
      }

      if (Object.keys(translationObject).some(key => key === keys[0])) {
        return findTranslation(keys.slice(1), translationObject[keys[0]], `${keyPath}.${keys[0]}`);
      }
      throw new Error(`Missing translation "${keys[0]}" in key "${keyPath}"`);
    }

    return findTranslation(keyString.split('.'), translations, 'translations');
  }
}

export default I18n;

export function getErrorStatusTranslation(e, translationPath) {
  const status = e.request && e.request.status;
  const knownErrorsStatus = [400, 404, 422];
  if (status && knownErrorsStatus.some(errorStatus => errorStatus === status)) {
    return I18n.t(`${translationPath}.${status}`);
  }
  return I18n.t(`${translationPath}.500`);
}

export function getErrorMessage(e, translationPath) {
  if (e.response
    && e.response.data
    && Object.prototype.hasOwnProperty.call(e.response.data, 'errorMessage')) {
    return e.response.data.errorMessage;
  }
  return getErrorStatusTranslation(e, translationPath);
}

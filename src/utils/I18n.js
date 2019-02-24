const translations = {
  en: {
    route: {
      notFound: 'Unfortunately, the requested route does not exist.',
    },
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

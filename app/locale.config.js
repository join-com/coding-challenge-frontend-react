const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
    messagesDirectory: 'dest/messages',
    translationsDirectory: 'src/locales/messages',
    languages: ['en'],
    jsonOptions: {
        space: 4
    }
});

module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/global-styles.js',
    '!app/reducers.js',
    '!app/sagas.js',
    '!app/env/index.js',
    '!app/atoms/*/index.js',
    '!app/molecules/*/index.js',
    '!app/organisms/*/index.js',
    '!app/pages/*/index.{js,jsx}',
    '!app/**/*.{story,stories}.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: [
    'node_modules',
    'app',
  ],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': 'identity-obj-proxy',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/internals/mocks/image.js',
    '^typeface-roboto$': '<rootDir>/internals/mocks/image.js',
  },
  setupFiles: [
    'raf/polyfill',
    'jest-localstorage-mock',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/internals/testing/test-bundler.js',
  testRegex: '.*\\.(spec|test)\\.js$',
};

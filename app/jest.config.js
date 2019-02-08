module.exports = {
    clearMocks: true,
    verbose: false,
    coverageDirectory: 'coverage',
    setupFiles: ['./test/jest.setup.js'],

    roots: [
        '<rootDir>/src'
    ],

    coveragePathIgnorePatterns: [
        '<rootDir>/node_modules',
        '<rootDir>/test'
    ],

    moduleNameMapper: {
        '^app/(.*)$': '<rootDir>/src/$1'
    }
};

module.exports = {
    setupFiles: [
        '<rootDir>/test-shim.js',
        '<rootDir>/test-setup.js'
    ],
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'json'
    ],
    transform: {
        '^.+\\.(ts|tsx|js)?$': '<rootDir>/test-preprocessor.js',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
    },
    testMatch: [
        '**/*.spec.(ts|tsx|js)'
    ],
    transformIgnorePatterns: [
        '<rootDir>/node_modules/'
    ]
};

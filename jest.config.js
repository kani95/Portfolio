
const jest = {
    preset: 'ts-jest',
    rootDir: '.',
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{js,ts}'],
    coverageThreshold: {
      global: {
        branches: 0,
        functions: 0,
        lines: 0,
        statements: 0,
      },
    },
    moduleNameMapper: {
      '@src/(.*)': '<rootDir>/src/$1',
    },
    moduleDirectories: ['src', 'node_modules'],
};

export default jest;
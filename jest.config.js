module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  rootDir: '.',
  testMatch: ['**/src/**/*.spec.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,vue}', '!**/node_modules/**'],
}

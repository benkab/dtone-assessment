module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  rootDir: './src',
  testMatch: ['**/src/**/*.spec.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{ts,vue}', '!**/node_modules/**'],
}

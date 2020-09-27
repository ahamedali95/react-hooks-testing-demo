module.exports = {
  setupFiles: [
    '<rootDir>/enzyme.config.js'
  ],
  testPathIgnorePatterns: [
    '<rootDir>/src/__tests__/testUtils.js',
  ],
  globals: {
    window: {
      innerWidth: 100,
      innerHeight: 200,
      addEventListener(event, callback) {},
      removeEventListener(event) {}
    }
  }
};
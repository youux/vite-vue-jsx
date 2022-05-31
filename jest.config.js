module.exports = {
  clearMocks: true,
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.{js|jsx|ts|tsx}$": "babel-jest",
  },
  transformIgnorePatterns: [
    '/node_modules/',
  ],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^assets/(.*)$": "<rootDir>/src/assets/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^views/(.*)$": "<rootDir>/src/views/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
    "^service/(.*)$": "<rootDir>/src/service/$1",
    "^store/(.*)$": "<rootDir>/src/store/$1",
  }
}

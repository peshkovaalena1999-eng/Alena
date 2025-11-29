const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://login.qa.studio/',
    setupNodeEvents(on, config) {},
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 10000
  }
});

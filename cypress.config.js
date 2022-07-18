const { defineConfig } = require('cypress');
const AllureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          AllureWriter(on, config);
          return config;
      }
  }
});

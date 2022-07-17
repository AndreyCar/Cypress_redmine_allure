const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			AllureWriter(on, config);
			return config;
		},
	},
});

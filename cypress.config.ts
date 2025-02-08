const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "ktpkkn",
  e2e: {
    baseUrl: 'http://localhost:5173',
  },
})
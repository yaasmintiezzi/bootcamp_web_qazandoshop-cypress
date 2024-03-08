const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br', // Dado que acesso o site BASE
    reporter: 'cypress-mochawesome-reporter', // Após instalar, configurar o Mocha para usar como ferramente de reporte
    reporterOptions: {                        // add essa linha também para o Mocha, começa aqui
      charts: true,
      reportPageTitle: 'Projeto Login',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,                 // termina aqui
    },
     setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); // add essa linha também para o Mocha
    },
  },
});

import { defineConfig } from "cypress";

export const cypressConfig: Partial<Cypress.Config> = {
  experimentalMemoryManagement: true,
  numTestsKeptInMemory: 0,
  screenshotOnRunFailure: false,
  pageLoadTimeout: 60000,
  viewportWidth: 1900,
  viewportHeight: 1080,
  e2e: {
    video: false,
    pageLoadTimeout: 90000,
    defaultCommandTimeout: 10000,
    execTimeout: 80000,
    numTestsKeptInMemory: 0,
    experimentalRunAllSpecs: true,
    screenshotOnRunFailure: false,
    experimentalMemoryManagement: true,
    retries: {
      runMode: 5,
      openMode: 3,
    },
    chromeWebSecurity: false,
    baseUrl: "http://localhost:3000",
    testIsolation: false,
  },
};

export default defineConfig({
  ...cypressConfig,
});

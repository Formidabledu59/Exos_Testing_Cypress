import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import 'dotenv/config';
import { dotenv } from 'cypress-plugin-dotenv';
import { allureCypress } from 'allure-cypress/reporter';
import { setIncognitoBrowser } from './cypress/support/utilities/util';

export default defineConfig({
    projectId: 'kgnray',
    // retries: 2,
    watchForFileChanges: false,
    env: {
        allureReuseAfterSpec: true,
    },
    e2e: {
        screenshotsFolder: './reports/screenshots',
        specPattern: ['**/*.feature', '**/*.cy.ts'],
        supportFile: 'cypress/support/e2e.ts',
        baseUrl: 'http://localhost',
        async setupNodeEvents(cypressOn, config) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const on = require('cypress-on-fix')(cypressOn);
            allureCypress(on, config, {
                resultsDir: 'reports/allure-results',
            });
            // allureWriter(on, config); // to get feature steps in allure report (not supported since cypress@12.14.0)
            await addCucumberPreprocessorPlugin(on, config);
            on('task', {});
            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)],
                }),
            );
            on('before:browser:launch', (browser, launchOptions) => {
                return setIncognitoBrowser(browser, launchOptions);
            });
            return dotenv(config);
        },
    },
});

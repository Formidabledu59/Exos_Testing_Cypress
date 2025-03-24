// Importation de la fonction 'defineConfig' de Cypress pour définir la configuration de Cypress.
import { defineConfig } from 'cypress';

// Importation de créateurs de plugins pour l'intégration de Cucumber et le préprocesseur esbuild.
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

// Importation de dotenv pour charger les variables d'environnement depuis un fichier .env
import 'dotenv/config';

// Importation du plugin dotenv pour utiliser les variables d'environnement dans Cypress.
import { dotenv } from 'cypress-plugin-dotenv';

// Importation du rapporteur Allure pour la génération de rapports de tests.
import { allureCypress } from 'allure-cypress/reporter';

// Importation de fonctions utilitaires personnalisées
import { setIncognitoBrowser } from './cypress/support/utilities/util';

// Configuration de Cypress avec 'defineConfig' qui est exportée par défaut.
export default defineConfig({
    // Identification du projet dans Cypress Dashboard (utile pour la gestion de projets).
    projectId: 'kgnray',
    // La configuration des essais (les essais sont réessayés en cas d'échec).
    // retries: 2,
    // Désactive le suivi des changements de fichiers dans l'interface.
    watchForFileChanges: false,
    env: {
        // Configuration de la réutilisation des résultats dans Allure (génération de rapports de tests).
        allureReuseAfterSpec: true,
    },
    e2e: {
        // Dossier où seront stockées les captures d'écran des tests échoués.
        screenshotsFolder: './reports/screenshots',
        // Spécification des fichiers de tests à exécuter, incluant les fichiers .feature pour Cucumber et .cy.ts pour les tests Cypress.
        specPattern: ['**/*.feature', '**/*.cy.ts'],
        // Fichier de support de test (le fichier principal qui contient les hooks et les configurations globales pour les tests).
        supportFile: 'cypress/support/e2e.ts',
        // URL de base pour les tests (utilisée avec cy.visit() et autres commandes).
        baseUrl: 'https://example.cypress.io/',
        // Fonction asynchrone de configuration des événements pour Cypress.
        async setupNodeEvents(cypressOn, config) {
            // Importation du module 'cypress-on-fix' qui permet de résoudre certains problèmes de compatibilité de versions.
            // Désactivation temporaire de la règle ESLint pour autoriser l'utilisation de 'require'.
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const on = require('cypress-on-fix')(cypressOn);

            // Configuration du rapporteur Allure pour générer des rapports détaillés sur les tests (résultats, étapes, etc.).
            allureCypress(on, config, {
                resultsDir: 'reports/allure-results',
            });

            // Activation du préprocesseur Cucumber pour transformer les fichiers .feature en tests exécutables dans Cypress.
            await addCucumberPreprocessorPlugin(on, config);

            // Enregistrement d'une tâche personnalisée qui permet d'afficher la valeur d'un élément coché dans la console.
            on('task', {});

            // Enregistrement du préprocesseur esbuild pour une gestion optimisée des fichiers TypeScript et des modules.
            on(
                'file:preprocessor',
                createBundler({
                    plugins: [createEsbuildPlugin(config)], // Utilisation du plugin esbuild pour la transpilation des fichiers.
                }),
            );

            // Configuration de l'ouverture du navigateur en mode Incognito (ou en mode privé) pour certains navigateurs.
            on('before:browser:launch', (browser, launchOptions) => {
                return setIncognitoBrowser(browser, launchOptions);
            });

            // Application des variables d'environnement depuis le fichier .env.
            return dotenv(config);
        },
    },
});

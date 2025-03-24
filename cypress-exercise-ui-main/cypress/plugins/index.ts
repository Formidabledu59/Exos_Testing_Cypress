// eslint-disable-next-line @typescript-eslint/no-var-requires
// Cette ligne désactive la règle ESLint qui empêche l'utilisation de 'require' dans les fichiers TypeScript.
// Cela permet d'importer le module cypress-cucumber-preprocessor en utilisant 'require', ce qui est nécessaire ici.
const cucumber = require('cypress-cucumber-preprocessor').default; // Importation du préprocesseur Cucumber pour Cypress

// Exportation de la fonction de configuration pour Cypress
module.exports = (on) => {
    // On enregistre un événement qui se déclenche lors de la pré-processing des fichiers
    // 'file:preprocessor' est un événement de Cypress qui est déclenché à chaque fois qu'un fichier doit être traité.
    // On associe cet événement au préprocesseur 'cucumber()', ce qui permet à Cypress de traiter les fichiers .feature
    // (contenant des scénarios écrits en Gherkin) avant qu'ils ne soient exécutés.
    on('file:preprocessor', cucumber()); 
};

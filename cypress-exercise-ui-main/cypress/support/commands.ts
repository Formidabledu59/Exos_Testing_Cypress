/// <reference types="cypress" />
// ***********************************************
// Ce fichier 'commands.ts' montre comment créer des commandes personnalisées 
// et écraser des commandes existantes dans Cypress.
//
// Pour des exemples plus détaillés de commandes personnalisées, lis ceci :
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- Commande parent --

import * as YAML from 'yamljs'; // Importation de la librairie YAML pour parser des chaînes YAML en objets JavaScript.
// import '@shelex/cypress-allure-plugin'; // Optionnel, pour inclure les étapes des fonctionnalités dans les rapports Allure (désormais non supporté depuis cypress@12.14.0)


// Commande personnalisée pour analyser une chaîne YAML et l'associer à un alias.
Cypress.Commands.add('parse', (str: string, title: string) => {
    const parsedStr = YAML.parse(str); // Transformation de la chaîne YAML en un objet JavaScript.
    cy.wrap(parsedStr).as(title); // Emballage de l'objet analysé dans un alias pour une utilisation ultérieure dans le test.
});

// Commande personnalisée pour vérifier si un élément possède une classe CSS spécifique.
Cypress.Commands.add('checkElementHasClass', (element: string, expectedClass: string) => {
    cy.get(element).should('have.class', expectedClass); // Vérification que l'élément a bien la classe spécifiée.
});

// Commande personnalisée pour afficher une valeur dans la console Cypress (via `cy.log`).
Cypress.Commands.add('cyLogValue', (value: string) => {
    cy.log(`Log value from command: ${value}`) // Affichage de la valeur dans la console de Cypress pour faciliter le débogage.
});


//
//
// -- Commande enfant --
// Exemple d'une commande personnalisée qui utilise un élément en tant que sujet précédent
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
//
// -- Commande double --
// Exemple d'une commande qui accepte un sujet optionnel
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- Commande écrasée --
// Exemple de remplacement d'une commande existante comme `visit`
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// Déclaration des types pour TypeScript (si vous avez besoin de personnaliser les types de commandes dans Cypress).
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void> // Exemple de commande personnalisée pour la connexion
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element> // Exemple de commande personnalisée pour un "drag"
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element> // Exemple de commande pour "dismiss"
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element> // Exemple de commande personnalisée pour la visite d'une URL
//     }
//   }
// }

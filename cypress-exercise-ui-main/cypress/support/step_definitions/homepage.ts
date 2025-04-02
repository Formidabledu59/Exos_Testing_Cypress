import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { getNow } from '../utilities/util';

// Naviguer vers une page spécifique
Given('je suis sur la page {string}', (page: string) => {
    cy.visit(page); // Navigue vers l'URL spécifiée
});

Then('le titre de la page doit être "Cypress.io: Kitchen Sink"', () => {
    // Vérifie que le titre de la page est correct.
    cy.title().should('eq', 'Cypress.io: Kitchen Sink');
});

Then('le menu doit être visible', () => {
    // Vérifie que le menu est visible.
    cy.get('.navbar').should('be.visible');
});

// Saisir la date du jour dans un champ
When('je saisis la date du jour dans le champ avec l\'id {string}', (id: string) => {
    const todayDate = getNow(); // Appel de la fonction pour obtenir la date actuelle
    cy.get(`#${id}`).type(todayDate); // Saisir la date dans le champ
});

// Vérifier que le champ contient la date du jour
Then('le champ avec l\'id {string} doit contenir la date du jour', (id: string) => {
    const todayDate = getNow(); // Appel de la fonction pour obtenir la date actuelle
    cy.get(`#${id}`).should('have.value', todayDate); // Vérifier que la valeur est correcte
});

// Cliquer sur un élément avec un texte spécifique
When('je clique sur le bouton avec le texte {string}', (buttonText: string) => {
    cy.contains('span.label', buttonText).click(); // Trouve le <span> avec le texte et clique dessus
});

// Vérifier qu'un popover avec une classe spécifique est visible
Then('un popover doit être visible', () => {
    cy.get('.popover').should('be.visible'); // Vérifie que le popover avec la classe "popover" est visible
});

// Vérifier qu'un élément possède une classe spécifique
Then('l\'élément avec l\'id {string} doit avoir la classe {string}', (id: string, className: string) => {
    cy.checkElementHasClass(`#${id}`, className); // Utilise la commande personnalisée
});
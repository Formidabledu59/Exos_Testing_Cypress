import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('je suis sur la page d\'accueil', () => {
    // Utilise la commande `cy.visit` pour naviguer vers la page d'accueil.
    cy.visit('/');
});

Then('le titre de la page doit être "Cypress.io: Kitchen Sink"', () => {
    // Vérifie que le titre de la page est correct.
    cy.title().should('eq', 'Cypress.io: Kitchen Sink');
});

Then('le menu doit être visible', () => {
    // Vérifie que le menu est visible.
    cy.get('.navbar').should('be.visible');
});
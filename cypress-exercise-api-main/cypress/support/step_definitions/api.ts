import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = 'https://jsonplaceholder.typicode.com';

Given('l\'API est disponible', () => {
    cy.request(`${baseUrl}`).its('status').should('eq', 200);
});

When('j\'envoie une requête GET à {string}', (endpoint: string) => {
    cy.request(`${baseUrl}${endpoint}`).as('apiResponse');
});

Then('le statut de la réponse doit être {int}', (statusCode: number) => {
    cy.get('@apiResponse').its('status').should('eq', statusCode);
});

Then('la réponse doit contenir une liste de posts', () => {
    cy.get('@apiResponse').its('body').should('be.an', 'array').then((body) => {
        cy.log('Liste des posts:', body); // Affiche la liste des posts dans la console
    });
    cy.get('@apiResponse').its('body.length').should('be.greaterThan', 0);
});

Then('la réponse doit contenir le post avec l\'ID {int}', (id: number) => {
    cy.get('@apiResponse').its('body').should('be.an', 'object').then((body) => {
        cy.log('Détails du post:', body); // Affiche les détails du post dans la console
    });
    cy.get('@apiResponse').its('body.id').should('eq', id);
});
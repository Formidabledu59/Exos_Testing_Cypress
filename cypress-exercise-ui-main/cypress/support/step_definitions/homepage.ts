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

// Vérifier qu'un élément existe en utilisant .get()
Then('l\'élément avec l\'id {string} doit exister', (id: string) => {
    cy.get(`#${id}`).should('exist'); // Vérifie que l'élément existe
});

// Vérifier qu'un élément existe en utilisant .contains()
Then('l\'élément {string} doit exister dans la barre de navigation', (elementText: string) => {
    cy.get('#navbar').contains(elementText).should('exist'); // Vérifie que l'élément avec le texte existe dans la barre de navigation
});

// Naviguer vers une page spécifique
Given('je suis sur la page d\'accueil et je suis sur un appareil {string}', (device: string) => {
    cy.visit("/"); // Navigue vers l'URL spécifiée
    cy.viewport(device as Cypress.ViewportPreset); // Change la taille de la fenêtre pour simuler un appareil spécifique (ex: 'iphone-5')
});

// Cocher une case à cocher dans un conteneur spécifique
When('je coche la case avec la valeur {string} dans le conteneur {string}', (value: string, containerClass: string) => {
    cy.get(`.${containerClass} [type="checkbox"]`).check(value); // Coche la case avec la valeur spécifiée dans le conteneur
});

// Vérifier qu'une case à cocher est cochée dans un conteneur spécifique
Then('la case avec la valeur {string} dans le conteneur {string} doit être cochée', (value: string, containerClass: string) => {
    cy.get(`.${containerClass} [type="checkbox"]`).should('be.checked'); // Vérifie que la case est cochée dans le conteneur
});
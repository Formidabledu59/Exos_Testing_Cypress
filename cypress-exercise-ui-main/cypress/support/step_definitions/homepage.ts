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

// Sélectionner une option dans un menu déroulant
When('je sélectionne l\'option {string} dans le menu déroulant avec la classe {string}', (option: string, selectClass: string) => {
    cy.get(`.${selectClass}`).select(option); // Sélectionne l'option spécifiée
});

// Vérifier qu'une option est sélectionnée
Then('l\'option {string} doit être sélectionnée', (option: string) => {
    cy.get('.action-select').should('have.value', `fr-${option.toLowerCase()}`); // Vérifie que l'option est sélectionnée
});

// Afficher la valeur de l'option sélectionnée dans la console
Then('la valeur de l\'option sélectionnée doit être affichée dans la console', () => {
    cy.get('.action-select').invoke('val').then((value) => {
        cy.task('log', `Valeur sélectionnée : ${value}`); // Affiche la valeur dans la console via une task
    });
});

// Affciche le menu déroulant
When('j\'affiche le menu {string}', (menuText: string) => {
    cy.contains('a', menuText).click({ force: true }); // clique sur le menu spécifié
});

// Vérifier que les éléments de la liste déroulante sont visibles
Then('les éléments suivants doivent être visibles dans la liste déroulante :', (dataTable) => {
    const expectedItems = dataTable.rawTable.flat(); // Récupère les éléments attendus depuis le tableau Gherkin
    expectedItems.forEach((item) => {
        cy.get('.dropdown-menu').contains(item).should('be.visible'); // Vérifie que chaque élément est visible
    });
});
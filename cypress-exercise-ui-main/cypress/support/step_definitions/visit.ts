import { Given } from '@badeball/cypress-cucumber-preprocessor';

// Étape Cucumber pour naviguer vers la page d'accueil du site.
Given(`je suis sur la page d'accueil`, () => {
    // Chargement de la page d'accueil en utilisant le chemin relatif '/'.
    cy.visit('/');
});

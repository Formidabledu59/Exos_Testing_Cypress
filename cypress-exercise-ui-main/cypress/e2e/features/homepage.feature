Feature: Page d'accueil

  Scenario: Charger la page d'accueil et vérifier les éléments
    Given je suis sur la page d'accueil
    Then le titre de la page doit être "Cypress.io: Kitchen Sink"
    And le menu doit être visible
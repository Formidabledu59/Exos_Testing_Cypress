Feature: Page d'accueil

  Scenario: Charger la page d'accueil et vérifier les éléments
    Given je suis sur la page "/"
    Then le titre de la page doit être "Cypress.io: Kitchen Sink"
    And le menu doit être visible

  Scenario: Saisir la date du jour dans un champ
    Given je suis sur la page "/commands/actions"
    When je saisis la date du jour dans le champ avec l'id "description"
    Then le champ avec l'id "description" doit contenir la date du jour
Feature: Tests de l'API avec Cypress

  Scenario: Récupérer tous les posts
    Given l'API est disponible
    When j'envoie une requête GET à "/posts"
    Then le statut de la réponse doit être 200
    And la réponse doit contenir une liste de posts

  Scenario: Récupérer un post spécifique par ID
    Given l'API est disponible
    When j'envoie une requête GET à "/posts/1"
    Then le statut de la réponse doit être 200
    And la réponse doit contenir le post avec l'ID 1
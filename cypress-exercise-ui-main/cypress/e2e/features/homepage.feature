Feature: Page d'accueil

  # Scenario: Charger la page d'accueil et vérifier les éléments
  #   Given je suis sur la page "/"
  #   Then le titre de la page doit être "Cypress.io: Kitchen Sink"
  #   And le menu doit être visible

  # Scenario: Saisir la date du jour dans un champ
  #   Given je suis sur la page "/commands/actions"
  #   When je saisis la date du jour dans le champ avec l'id "description"
  #   Then le champ avec l'id "description" doit contenir la date du jour

  # Scenario: Cliquer sur un bouton "click me" et vérifier la présence d'un popover
  #   Given je suis sur la page "/commands/actions"
  #   When je clique sur le bouton avec le texte "click me"
  #   Then un popover doit être visible

  # Scenario: Vérifier qu'un élément ait bien la classe attendue
  #   Given je suis sur la page "/commands/actions"
  #   Then l'élément avec l'id "email1" doit avoir la classe "action-email"

  # Scenario: Vérifier qu'un élément existe en utilisant .get()
  #   Given je suis sur la page "/commands/actions"
  #   Then l'élément avec l'id "email1" doit exister

  # Scenario: Vérifier qu'un élément existe dans la navbar en utilisant .contains()
  #   Given je suis sur la page "/commands/actions"
  #   Then l'élément "Cypress API" doit exister dans la barre de navigation

  # Scenario: Charger la page d'accueil sur un mobile et vérifier les éléments
  #   Given je suis sur la page d'accueil et je suis sur un appareil "ipad-2"
  #   Then le titre de la page doit être "Cypress.io: Kitchen Sink"
  #   And le menu doit être visible

# Scenario: Sélectionner une case à cocher spécifique et vérifier qu'elle est bien cochée
#     Given je suis sur la page "/commands/actions"
#     When je coche la case avec la valeur "checkbox1" dans le conteneur "action-checkboxes"
#     Then la case avec la valeur "checkbox1" dans le conteneur "action-checkboxes" doit être cochée

Scenario: Sélectionner une option dans un menu déroulant et afficher sa valeur
    Given je suis sur la page "/commands/actions"
    When je sélectionne l'option "apples" dans le menu déroulant avec la classe "action-select"
    Then l'option "apples" doit être sélectionnée
    And la valeur de l'option sélectionnée doit être affichée dans la console
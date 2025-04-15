Feature: Tests de l'API avec Cypress

  # Scenario: Récupérer tous les posts
  #   Given l'API est disponible
  #   When j'envoie une requête GET à "/posts"
  #   Then le statut de la réponse doit être 200
  #   And la réponse doit contenir une liste de posts

  # Scenario: Récupérer un post spécifique par ID
  #   Given l'API est disponible
  #   When j'envoie une requête GET à "/posts/1"
  #   Then le statut de la réponse doit être 200
  #   And la réponse doit contenir le post avec l'ID 1

# Scenario: Utiliser une task pour faire une requête GET avec Axios
#   When j'utilise la task "apiRequest" avec la méthode "get" et l'URL "/posts/1"
#   Then la réponse de la task doit contenir un post avec l'ID 1

# Scenario: Utiliser une task pour faire une requête POST avec Axios
#   When j'utilise la task "apiRequest" avec la méthode "post", l'URL "/posts" et les données suivantes:
#     | title | body       | userId |
#     | test  | Ceci est un test | 1      |
#   Then la réponse de la task doit contenir un titre "test" et un userId 1

  Scenario: Vérifier l'intégrité des données d'un post
    When j'envoie une requête GET à "/posts/1"
    Then le post renvoyé doit avoir un titre et un body non vides

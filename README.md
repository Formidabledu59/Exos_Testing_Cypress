# Exercices de découverte

## Exercice Cypress UI

Le but de l’exercice est de requêter une API en se familiarisant avec les outils Cypress comme les commandes et les taches

[Download](asset/originalZip/cypress-exercise-ui-main.zip)

Les consignes sont dans le readme. Le but est de se familiariser avec Cypress en interagissant avec les pages avec les fonctions Cypress, en manipulant les données et les éléments en utilisant une ou plusieurs tasks, et en utilisant une ou plusieurs commandes afin de réaliser des assertions sur l'état des éléments ainsi que leurs attributs

---

## Exercice Cypress API

Le but de l’exercice est de requêter une API en se familiarisant avec les outils Cypress comme les commandes et les taches

[Download](asset/originalZip/cypress-exercise-api-main.zip)

Les consignes sont dans le readme. Le but est de se familiariser avec Cypress en développant des appels API en utilisant une ou plusieurs tasks, et en utilisant une ou plusieurs commandes afin de réaliser des assertions sur le contenu des éléments reçus ainsi que leur intégrité

---

## Exercice Final Cypress

URL: [DEMOQA](https://demoqa.com/login)

Il faut d’abord se créer un compte à la main

Exemple:
- **Nom d'utilisateur**: user
- **Mot de passe**: Coucou123!

### 1. Rechercher un Livre

1. Connectez-vous à votre compte.
2. Vérifiez via l'API que tous les livres sont listés et que leurs informations sont affichées correctement.
3. Effectuez une recherche pour un livre spécifique (ex. "DEMOQA").
4. Cliquez sur un livre pour accéder à sa page de détails.
5. Vérifiez que les informations du livre affichées dans la liste correspondent bien à celles affichées sur la page de détails (ces informations proviennent de l'API).
6. Revenez à la liste des livres.
7. Déconnectez-vous.

### 2. Ajouter et Supprimer un Livre

1. Connectez-vous à votre compte.
2. Recherchez un livre spécifique.
3. Ajoutez ce livre à votre collection.
4. Vérifiez via l'API que le livre a bien été ajouté à la liste des livres associés à votre compte.
5. Faites une vérification visuelle sur votre profil pour vous assurer que le livre a bien été ajouté.
6. Vérifiez que les éléments suivants sont correctement affichés :
   - Image du livre
   - Titre
   - Auteur
   - Éditeur
   - Bouton de suppression
7. Supprimez le livre via l'interface front-end.
8. Vérifiez visuellement que le livre a été supprimé de votre collection.
9. Vérifiez via l'API que le livre a bien été supprimé.

### 3. Créer et Vérifier un Jeu de Données de Test

1. Utilisez l'API pour créer une liste de livres associée à votre compte de test.
2. Connectez-vous à votre compte.
3. Allez sur votre profil et vérifiez que la liste des livres est complète.
4. Utilisez l'API pour modifier cette liste (ajouter ou supprimer des livres).
5. Rechargez la page et vérifiez que les modifications apportées via l'API ont bien été prises en compte et sont visibles sur le profil.


# Exercice Cypress API

> [!CAUTION]
> Ne pas push sur ce projet :)


## Contexte

API de référence: https://jsonplaceholder.typicode.com

Documentation de l'API: https://jsonplaceholder.typicode.com/guide/

Avec l'utilisation de Typescript, utiliser des types définis en s'aidant des `models`

S'assurer que son code répond aux standards de développement

## Consignes:

-   Utiliser les fonctions [natives Cypress](https://docs.cypress.io/api/commands/request#__docusaurus_skipToContent_fallback) pour récupérer
    -   tous les posts en faisant un `GET` via la ressource `/posts`
    -   un seul post en faisant un `GET` via la ressource `/posts/:id`
-   Créer une [`task`](https://docs.cypress.io/api/commands/task#__docusaurus_skipToContent_fallback) Cypress qui aura pour but d'exécuter une requête en utilisant la lib [`Axios`](https://www.npmjs.com/package/axios) et de récupérer le résultat dans la `step_definition` d'appel
    -   Cette task devra pouvoir exécuter les méthodes `get` et `post`
    -   La task doit prendre en charge les erreurs et définir clairement la raison de l'echec de l'appel
-   Créer une commande qui permet de vérifier l'intégrité des données renvoyées par l'API

# Documentation

## Les contextes Cypress

### Dans le contexte Cypress

Les fonctions qui seront appelées dans le processus Cypress sont les fonctions concernant les tests. De manière générale on va stocker tout ce qui est interne au contexte Cypress dans le dossier `\cypress`

-   Les steps sont à définir dans `cypress\support\step_definitions`
-   Les tâches Cypress sont à définir dans `cypress\support\tasks`
-   Les commandes Cypress sont à définir dans `cypress\support\commands.ts`
-   Les fonctions utiles (comme du formatage de données par exemple) sont à écrire dans `cypress\support\utilities`
-   Les fichiers JSON de référence sont à stocker dans `cypress\fixtures`
-   Les features sont à écrire dans `cypress\e2e\features`
-   Si vous utilisez des POMs, stockez les dans `cypress\support\pages`

Veillez à opter pour l'utilisation de Page Object Models afin d'optimiser la réutilisabilité du code et des éléments HTML

## Exécution des Tests

-   En utiliser l'interface Cypress: `npx cypress open`
-   Exécuter directement le test: `npx cypress run`

## Commandes

Voici une liste de commandes utiles, adaptez les en fonction de vos besoins

| **Run en local**                                                                   | **-**                                                                                 |
| :--------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `npx cypress open`                                                                 | Ouvrir l'interface graphique                                                          |
| `npx cypress run --browser ./node_modules/chromium/lib/chromium/chrome-win/chrome` | Exécuter en utilisant chromium (attention le chemin change en pour une distrib linux) |
| **Appliquer la QA**                                                                | **-**                                                                                 |
| `npm run prettier:write`                                                           | Prettier en écriture                                                                  |
| `npm run lint`                                                                     | Prettier + EsLint                                                                     |
| `npm run lint:gherkin`                                                             | Lint des fichiers `.feature`                                                          |

# Realisation

## Exercice 1 : Récupérer tous les posts

Ajoute un scénario dans le fichier api.feature :
```gherkin
Feature: Tests de l'API avec Cypress

  Scenario: Récupérer tous les posts
    When j'envoie une requête GET à "/posts"
    Then le statut de la réponse doit être 200
    And la réponse doit contenir une liste de posts
```

Ajoute les étapes correspondantes dans le fichier api.ts :
```javascript
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
```
## Exercice 2 : Récupérer un seul post

Ajoute un scénario dans le fichier api.feature :
```gherkin
Feature: Tests de l'API avec Cypress

  Scenario: Récupérer un post spécifique par ID
    When j'envoie une requête GET à "/posts/1"
    Then le statut de la réponse doit être 200
    And la réponse doit contenir le post avec l'ID 1
```

Ajoute les étapes correspondantes dans le fichier api.ts :
```javascript
Then('la réponse doit contenir le post avec l\'ID {int}', (id: number) => {
    cy.get('@apiResponse').its('body').should('be.an', 'object').then((body) => {
        cy.log('Détails du post:', body); // Affiche les détails du post dans la console
    });
    cy.get('@apiResponse').its('body.id').should('eq', id);
});
```
---

## Liens utiles

[Doc officielle Cypress](https://docs.cypress.io/guides/overview/why-cypress)

[Doc Kiabi Cypress](https://mykiabi.atlassian.net/wiki/spaces/TESTING/pages/3643900327/Cypress)

[Doc Kiabi Cypress - Intégrer sur Gitlab CI](https://mykiabi.atlassian.net/wiki/spaces/TESTING/pages/4195254313/CI+CD)

##

Ajoute un scénario dans le fichier api.feature :
```gherkin

```

Ajoute les étapes correspondantes dans le fichier api.ts :
```javascript

```
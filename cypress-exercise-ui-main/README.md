# Corrigé exercice Cypress UI

> [!CAUTION]
> Ne pas push sur ce projet :)

## Contexte

Application de référence: https://example.cypress.io/

Un peu d'aide pour son premier test: https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test#Step-1-Visit-a-page

#### Attention à:
- Les cas de test seront écrits en Gherkin
- On utilisera Typescript, je conseille donc d'utiliser des types définis en s'aidant des `models`
- On s'assurera que le code répond aux standards de développement, les commandes sont définies [ici](#Commandes)

## Consignes:
Conseil: effectuer les actions sur la page [/commands/actions](https://example.cypress.io/commands/actions), on peut y interagir facilement avec les éléments

- [1] Charger la page d'accueil et attendre son chargement complet, le titre de la page et le menu doivent être affichés
- [2] Saisir la date du jour du texte dans un champ (la date sera serialisée dans une fonction externe dans `cypress\support\utilities`)
- [3] Cliquer sur un bouton "click me" et vérifier la présence d'un popover
- [4] Vérifier qu'un élément ait bien la classe attendue en utilisant une [commande custom Cypress ](https://docs.cypress.io/api/cypress-api/custom-commands#__docusaurus_skipToContent_fallback)
- [5] Vérifier qu'un élément existe en utilisant[ `.get()`](https://docs.cypress.io/api/commands/get#__docusaurus_skipToContent_fallback)
- [6] Vérifier qu'un élément existe en utilisant [`.contains()`](https://docs.cypress.io/api/commands/contains#__docusaurus_skipToContent_fallback)
- [7] Tester l'affichage du site sur mobile, la page doit afficher les premiers éléments composant la page
- [8] Tester l'affichage du site sur tablette, la page doit afficher les premiers éléments composant la page
- [9] Sélectionner une case à cocher et vérifier qu'elle est bien cochée
- [10] Sélectionner une option dans un menu déroulant, l'option doit être seléctionnée. Récupérer la valeur de l'option seléctionnée depuis une [task Cypress](https://docs.cypress.io/api/commands/task#__docusaurus_skipToContent_fallback) que vous aurez créé. Afficher cette valeur dans un `console.log()` depuis la task, et depuis le step_definition en utilisant la commande Cypress [`cy.log()`](https://docs.cypress.io/api/commands/log#Command-Log)
- [11] Afficher la liste déroulante du menu "Commands" et vérifier la présence de ses éléments

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

### En dehors du contexte Cypress

Les fonctions appelées en dehors du contexte Cypress sont les fontions qui servent à la manipulation de fichiers autour des tests par exemple la création d'un rapport d'exécution. Elles sont à écrire dans `\utilities`

---

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

---
# Realisation

## Exercice 1 : Charger la page d'accueil et vérifier les éléments


Ajoute un fichier nommé homepage.feature dans le dossier cypress/e2e/features.

```gherkin
Feature: Page d'accueil

  Scenario: Charger la page d'accueil et vérifier les éléments
    Given je suis sur la page d'accueil
    Then le titre de la page doit être "Cypress.io: Kitchen Sink"
    And le menu doit être visible
```
Ajoute un fichier nommé homepage.ts dans le dossier cypress/support/step_definitions.
```javascript
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('je suis sur la page d\'accueil', () => {
    // Utilise la commande `cy.visit` pour naviguer vers la page d'accueil.
    cy.visit('/');
});

Then('le titre de la page doit être "Cypress.io: Kitchen Sink"', () => {
    // Vérifie que le titre de la page est correct.
    cy.title().should('eq', 'Cypress.io: Kitchen Sink');
});

Then('le menu doit être visible', () => {
    // Vérifie que le menu est visible.
    cy.get('.navbar').should('be.visible');
});
```

---

## Liens utiles

[Doc officielle Cypress](https://docs.cypress.io/guides/overview/why-cypress)

[Doc Kiabi Cypress](https://mykiabi.atlassian.net/wiki/spaces/TESTING/pages/3643900327/Cypress)

[Doc Kiabi Cypress - Intégrer sur Gitlab CI](https://mykiabi.atlassian.net/wiki/spaces/TESTING/pages/4195254313/CI+CD)


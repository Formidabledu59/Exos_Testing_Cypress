// Déclaration des types supplémentaires pour étendre la fonctionnalité de Cypress avec TypeScript
declare namespace Cypress {
    // Définition de l'interface Chainable pour ajouter des commandes personnalisées dans Cypress
    interface Chainable<Subject> {

        // Commande personnalisée 'login' pour simuler une connexion avec un matricule et un mot de passe.
        // Elle prend deux arguments : `matricule` et `password`, puis retourne un objet Chainable.
        login(matricule: string, password: string): Chainable<any>;

        // Commande personnalisée 'parse' pour analyser une chaîne YAML et l'associer à un alias.
        // Elle prend un string (la chaîne YAML) et un titre (alias) puis retourne un objet Chainable.
        parse(str: string, title: string): Chainable<any>;

        // Redéfinition de la commande `get` avec l'alias comme paramètre.
        // Cela permet de récupérer un élément déjà aliasé à l'aide de `cy.wrap()` par exemple.
        // L'option `options` permet de spécifier des options comme le temps de timeout, l'enregistrement dans les logs, etc.
        get<S>(alias: string, options?: Partial<Loggable & Timeoutable & Withinable & Shadow>): Chainable<S>;

        // Commande `get` pour récupérer un élément DOM en utilisant un sélecteur CSS.
        // Cette version est une surchage pour manipuler des éléments de type `HTMLElement`.
        get<E extends Node = HTMLElement>(
            selector: string,
            options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
        ): Chainable<JQuery<E>>;

        // Commande personnalisée 'checkElementHasClass' pour vérifier qu'un élément a une classe spécifique.
        checkElementHasClass(element: string, expectedClass: string): Chainable<any>;

        // Commande personnalisée 'cyLogValue' pour afficher une valeur dans les logs de Cypress.
        cyLogValue(value: string): Chainable<any>;
    }
}

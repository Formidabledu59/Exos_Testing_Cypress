declare global {
    namespace Cypress {
        interface Chainable<Subject> {
            login(matricule: string, password: string): Chainable<any>;
            parse(str: string, title: string): Chainable<any>;
        }
    }
}

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = 'https://jsonplaceholder.typicode.com';

Given('l\'API est disponible', () => {
    cy.request(`${baseUrl}`).its('status').should('eq', 200);
});

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

Then('la réponse doit contenir le post avec l\'ID {int}', (id: number) => {
    cy.get('@apiResponse').its('body').should('be.an', 'object').then((body) => {
        cy.log('Détails du post:', body); // Affiche les détails du post dans la console
    });
    cy.get('@apiResponse').its('body.id').should('eq', id);
});

When('j\'utilise la task {string} avec la méthode {string} et l\'URL {string}', (taskName: string, method: string, url: string) => {
    cy.task(taskName, { method, url: `https://jsonplaceholder.typicode.com${url}` }).as('taskResponse');
  });
  
  Then('la réponse de la task doit contenir un post avec l\'ID {int}', (id: number) => {
    cy.get('@taskResponse').should((response) => {
      expect(response).to.have.property('id', id);
    });
  });

  When(
    'j\'utilise la task {string} avec la méthode {string}, l\'URL {string} et les données suivantes:',
    (taskName: string, method: string, url: string, dataTable: any) => {
        const data = dataTable.hashes()[0]; // Récupère la première ligne du tableau de données
      data.userId = Number(data.userId); // Convertit userId en nombre
      cy.task(taskName, { method, url: `https://jsonplaceholder.typicode.com${url}`, data }).as('taskResponse');
    }
  );
  
  Then('la réponse de la task doit contenir un titre {string} et un userId {int}', (title: string, userId: number) => {
    cy.get('@taskResponse').should((response) => {
      expect(response).to.have.property('title', title);
      expect(response).to.have.property('userId', userId);
    });
  });

  Then('le post renvoyé doit avoir un titre et un body non vides', () => {
    cy.get('@apiResponse').its('body').then((post) => {
      cy.checkPostIntegrity(post);
    });
  });  
  
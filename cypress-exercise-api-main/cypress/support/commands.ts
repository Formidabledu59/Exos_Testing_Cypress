/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

// import '@shelex/cypress-allure-plugin'; // to get feature steps in allure report (not supported since cypress@12.14.0)

Cypress.Commands.add('checkPostIntegrity', (post) => {
    expect(post).to.have.property('title').and.to.be.a('string').and.not.to.be.empty;
    expect(post).to.have.property('body').and.to.be.a('string').and.not.to.be.empty;
  });
  
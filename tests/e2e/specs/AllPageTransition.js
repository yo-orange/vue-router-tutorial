// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')

    // About
    cy.xpath('//a[text()="About"]').click();
    cy.contains('h1', 'This is an about page')

    // User:1
    cy.xpath('//a[text()="User:1"]').click();
    cy.contains('h1', 'This is User Top Page')

    cy.xpath('//a[text()="Profile"]').click();
    cy.contains('h1', 'This is Profile page')
    cy.contains('div.users > div', 'Profile User Id: 1')

    cy.xpath('//a[text()="Posts"]').click();
    cy.contains('h1', 'This is Posts page')
    cy.contains('div.users > div', 'Profile User Id: 1')

    // User:2
    cy.xpath('//a[text()="User:2"]').click();
    cy.contains('h1', 'This is User Top Page')
    cy.contains('div.users > div', 'Post User ID: 1')

    // User Settings
    cy.xpath('//a[text()="UserSettings"]').click();
    cy.contains('h2', 'User Settings')
    cy.contains('h3', 'Email Subscriptions')

    // User Settings > Profile
    cy.xpath('//a[text()="profile"]').click();
    cy.contains('h2', 'User Settings')
    cy.contains('div.us__content > h3', 'Edit your profile')
    cy.contains('div.us__content--helper > h3', 'Preview of your profile')

    // ZipCode
    cy.xpath('//a[text()="ZipCode"]').click();
  })
})

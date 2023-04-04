// spec tests following Cypress documentation

describe('Visit the Kitchen Sink and Assert an Element', () => {
  it('finds the "app" element after loading the page', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('app')
  })
});

describe('Visit the Kitchen Sink and Click an Element', () => {
  it('successfully clicks on the "type" URL', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    // assert that the url has changed
    cy.url().should('include', '/commands/actions')
  })
});

describe('Visit the Kitchen Sink and Verify URL Routing', () => {
  it('verifies that the correct URL was routed to', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    // assert that the url has changed
    cy.url().should('include', '/commands/actions')
  })
});

describe('Route to "Actions" and Enter Text into Full Name', () => {
  it('successfully types the value into the Full Name text box', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    // ensure that the correct URL was routed to
    cy.url().should('include', '/commands/actions')

    cy.get('#fullName1').type('Justice Jansen')
    cy.get('#fullName1').should('have.value', 'Justice Jansen')
  })
});
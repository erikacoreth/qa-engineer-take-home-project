it('Add Customer', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Add Customer').click();

    cy.get('input[name="firstName"]').type('Erika');
    cy.get('input[name="lastName"]').type('Coreth');
    cy.get('input[name="email"]').type('erikarocks@gmail.com');
    cy.get('input[name="addressLine1"]').type('123 Philly st');
    cy.get('input[name="addressLine2"]').type('Apt 100');
    cy.get('input[name="city"]').type('Philadelphia');
    cy.get('input[name="state"]').type('PA');
    cy.get('input[name="zip"]').type('19106');
    cy.get('input[name="notes"]').type('nice home.');

    cy.get('[data-testid="save-button"]').click({ force: true });

});


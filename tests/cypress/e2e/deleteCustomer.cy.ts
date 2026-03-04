it.skip('Delete an existing customer', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Coreth').parents('tr').within(() => {
        cy.contains('Edit').click();
    }); //edit the table row that says Erika Coreth
    cy.contains('Remove Customer').click({ force: true});

    //confirm removal
    cy.contains('Yes').click({force: true});

    //change filed inside the edited person
    cy.contains('Coreth').should('not.exist');
});
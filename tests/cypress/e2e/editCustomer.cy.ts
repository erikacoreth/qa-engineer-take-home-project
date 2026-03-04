it('Edit an existing customer', () => {
    cy.visit('http://localhost:5173')
    //remove erika coreth
    cy.contains('Coreth').parents('tr').within(() => {
        cy.contains('Edit').click();
    }); //edit the table row that says Erika Coreth

    //change filed inside the edited person
    cy.get('input[name="email"]').clear().type('erikasucks@gmail.com');
    cy.get('[data-testid="save-button"]').click({ force: true });

});
it.skip('View an existing customers details', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Coreth').parents('tr').within(() => {
        cy.contains('Edit').click();
    }); 
    //check that the modal shows the correct user
    cy.get('modal-content').within(() => {
        cy.contains('Coreth');
        cy.contains('Erika');
        cy.contains('erikarocks@gmail.com');
        cy.contains('Philadelphia');

    });

    //confirm removal
    cy.contains('Close').click({force: true});
});
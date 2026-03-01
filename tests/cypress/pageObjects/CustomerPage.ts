import { Customer } from "../support/dataModels/CustomerModel";

const selectors = {
    customerRow: '[data-testid^="customer-row-"]',
    edit: '[data-testid^="edit-customer-button-"]',
    firstName: '[data-testid="first-name"]'
}

export default class CustomerPage {
    clickAddCustomer(): void {
        cy.get('[data-testid="save-button"]').click({ force: true });
    }

    openEditCustomer(email: string): void {
        this.customerRowWithEmail(email).within(() => {
            cy.get(selectors.edit).click();
        });
    }

    customerRowWithEmail(email: string): Cypress.Chainable {
        return cy.get(`${selectors.customerRow}:contains(${email})`);
    }

    validateRow(customer: Customer): void {
        this.customerRowWithEmail(customer.email).within(() => {
            cy.get(selectors.firstName).contains(customer.firstName);
            // ...
        });
    }
}

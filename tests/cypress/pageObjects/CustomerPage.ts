import { Customer } from "../support/dataModels/CustomerModel";

const selectors = {
    addCustomer: '[data-testid="add-customer-button"]',
    customerRow: '[data-testid^="customer-row-"]',
    edit: '[data-testid^="edit-customer-button-"]',
    firstName: '[data-testid="first-name"]'
}

export default class CustomerPage {
    clickAddCustomer(): void {
        cy.get(selectors.addCustomer).click({ force: true });
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

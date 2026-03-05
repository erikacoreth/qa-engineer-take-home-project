import { Customer } from "../support/dataModels/CustomerModel";

const selectors = {
    addCustomer: '[data-testid="add-customer-button"]',
    customerRow: '[data-testid^="customer-row-"]',
    edit: '[data-testid^="edit-customer-button-"]',
    firstName: '[data-testid="first-name"]',
    lastName: '[data-testid="last-name"]',
    email: '[data-testid="email"]',
    addressLine1: '[data-testid="address-line1"]',
    addressLine2: '[data-testid="address-line2"]',
    city: '[data-testid="city"]',
    state: '[data-testid="state"]',
    zip: '[data-testid="zip"]',
    notes: '[data-testid="notes"]'
}

export default class CustomerPage {
    clickAddCustomer(): void {
        cy.get(selectors.addCustomer).click({ force: true });
    }

    openEditCustomer(email: string): void {
        cy.intercept("GET", "**/api/customers/*/details").as("getCustomerDetails");
        this.customerRowWithEmail(email).within(() => {
            cy.get(selectors.edit).click();
        });
        cy.wait("@getCustomerDetails");
        cy.get(selectors.firstName).should("be.visible");
    }

    customerRowWithEmail(email: string): Cypress.Chainable {
        return cy.contains('td', email).closest('tr');;
    }

    validateRow(customer: Customer): void {
        this.customerRowWithEmail(customer.email).within(() => {
            cy.get(selectors.email).contains(customer.email);
        });
    }
}

import { Customer } from "../support/dataModels/CustomerModel";
import { random } from "../support/util/randomData";

const selectors = {
    firstName: '[data-testid="first-name"]',
    lastName: '[data-testid="last-name"]',
    email: '[data-testid="email"]',
    addressLine1: '[data-testid="address-line-1"]',
    addressLine2: '[data-testid="address-line-2"]',
    city: '[data-testid="city"]',
    state: '[data-testid="state"]',
    zip: '[data-testid="zip"]',
    notes: '[data-testid="notes"]',
    save: '[data-testid="save-button"]'
};

export default class CustomerModal {
    fill(customer: Customer): void {
        cy.get(selectors.firstName).type(customer.firstName);
        cy.get(selectors.lastName).type(customer.lastName);
        cy.get(selectors.email).type(customer.email);
        cy.get(selectors.addressLine1).type(customer.addressLine1);
        cy.get(selectors.addressLine2).type(customer.addressLine2);
        cy.get(selectors.city).type(customer.city);
        cy.get(selectors.state).type(customer.state);
        cy.get(selectors.zip).type(customer.zip);
        cy.get(selectors.notes).type(customer.notes);
    }

    save(): void {
        cy.get(selectors.save).click({ force: true });
    }

    validate(customer: Customer): void {
        cy.get(selectors.firstName).should('have.value', customer.firstName);
        // ...
    }
}

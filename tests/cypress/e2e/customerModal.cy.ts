import CustomerModal from "../pageObjects/CustomerModal";
import CustomerPage from "../pageObjects/CustomerPage";
import { Customer, generateCustomer } from "../support/dataModels/CustomerModel";

const customerModal: CustomerModal = new CustomerModal();
const customerPage: CustomerPage = new CustomerPage();

describe("Add/Edit Customer Test Cases", () => {

    beforeEach(() => {
        cy.visit('http://localhost:5173');
    });

    it('Add Customer', () => {
        const customer: Customer = generateCustomer();

        customerPage.clickAddCustomer();
        customerModal.fill(customer);
        customerModal.save();
        customerPage.openEditCustomer(customer.email);
        customerModal.validate(customer);
    });

    it('Edit Customer', () => {
        const customer: Customer = postCustomer(); // TODO
        const updatedCustomer: Customer = generateCustomer();

        customerPage.openEditCustomer(customer.email);
        customerModal.fill(updatedCustomer);
        customerModal.save();
        customerPage.openEditCustomer(updatedCustomer.email);
        customerModal.validate(updatedCustomer);
    });
});


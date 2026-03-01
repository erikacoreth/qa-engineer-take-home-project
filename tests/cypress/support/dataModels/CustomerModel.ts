import { random } from "../util/randomData";

export interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zip: string;
    notes?: string;
}

export function generateCustomer(): Customer {
    return {
        firstName: random.getFirstName(),
        lastName: random.getLastName(),
        email: random.getEmail(),
        addressLine1: random.getAddress(),
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        notes: "",
    }
}

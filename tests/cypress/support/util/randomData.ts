import { faker } from "@faker-js/faker";

export class RandomData {
    getFirstName(): string {
        return faker.person.firstName();
    }

    getLastName(): string {
        return faker.person.lastName();
    }

    getEmail(): string {
        return faker.internet.email();
    }

    getAddress1(): string {
        return faker.location.streetAddress();
    }

    getAddress2(): string {
        return faker.location.streetAddress();
    }

    getCity(): string {
        return faker.location.city();
    }

    getState(): string {
        return faker.location.state();
    }

    getZip(): string {
        return faker.location.zipCode();
    }

    getNotes(): string {
        return faker.lorem.sentence();
    }

}

export const random: RandomData = new RandomData();

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

    getAddress(): string {
        return faker.location.streetAddress();
    }
}

export const random: RandomData = new RandomData();

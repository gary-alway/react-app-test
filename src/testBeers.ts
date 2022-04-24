import { Beer } from "./types";
import faker from "@faker-js/faker";

export const testBeer = (overrides: Partial<Beer> = {}): Beer => ({
  id: faker.datatype.number(),
  name: faker.lorem.words(1),
  tagline: faker.lorem.words(4),
  image_url: faker.internet.url(),
  ...overrides,
});

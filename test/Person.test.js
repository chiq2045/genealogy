const Person = require('../tree/Person');

describe('Person', () => {
  test('should have name field', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.name).toBeTruthy();
  });
});

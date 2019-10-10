const Person = require('../tree/Person');

describe('Person', () => {
  test('should have name field', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.name).toBeTruthy();
  });

  test('should have a parents field', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.parents).toBe(null);
  });

  test('should have a children field', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.children).toBe(null);
  });

  test('should have a spouses field', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.children).toBe(null);
  });
});

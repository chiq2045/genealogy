const Person = require('../tree/Person');

describe('Person', () => {
  test('should have name field', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.name).toBeTruthy();
  });

  test('.parents should be empty Array', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.parents).toStrictEqual([]);
  });

  test('.children should be empty Array', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.children).toStrictEqual([]);
  });

  test('.couples should be empty Array', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.couples).toStrictEqual([]);
  });
});

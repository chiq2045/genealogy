const Person = require('../tree/Person');

describe('Person', () => {
  test('should be correct structure', () => {
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

  test('.partners should be empty Array', () => {
    const person = new Person('Suzu Fujibayashi');

    expect(person.partners).toStrictEqual([]);
  });

  test('adds new person to parent Array', () => {
    const person = new Person('Suzu Fujibayashi');
    const parent = new Person('Dozou Fujibayashi');

    expect(person.addParent(parent)).toBeTruthy();
    expect(person.parents[0].name).toBe('Dozou Fujibayashi');
    expect(parent.children[0].name).toBe('Suzu Fujibayashi');
  });

  test('adds new child to child Array', () => {
    const person = new Person('Dozou Fujibayashi');
    const child = new Person('Suzu Fujibayashi');

    expect(person.addChild(child)).toBeTruthy();
    expect(person.children[0].name).toBe('Suzu Fujibayashi');
    expect(child.parents[0].name).toBe('Dozou Fujibayashi');
  });

  test('adds new partner to partners Array', () => {
    const person = new Person('Dozou Fujibayashi');
    const partner = new Person('Okiyo Fujibayashi');

    expect(person.addPartner(partner)).toBeTruthy();
    expect(person.partners[0].name).toBe('Okiyo Fujibayashi');
    expect(partner.partners[0].name).toBe('Dozou Fujibayashi');
  });
});

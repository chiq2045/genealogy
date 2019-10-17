const Tree = require('../tree/Tree');

describe('Tree', () => {
  test('should start with null root', () => {
    const tree = new Tree();

    expect(tree.root).toBe(null);
  });

  test('should add a person to root of empty tree', () => {
    const tree = new Tree();

    expect(tree.root).toBe(null);
    expect(tree.addPerson('Suzu Fujibayashi')).toBeTruthy();
    expect(tree.root.name).toBe('Suzu Fujibayashi');
  });
});

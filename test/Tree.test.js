const Tree = require('../tree/Tree');

describe('Tree', () => {
  test('should start with null root', () => {
    const tree = new Tree();

    expect(tree.root).toBe(null);
  });
});

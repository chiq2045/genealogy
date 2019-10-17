const Person = require('./Person');

/**
 * Class representing a tree
 */
class Tree {
  /**
   * @class
   * @property {Person} root - the root of a tree
   */
  constructor() {
    this.root = null;
  }

  /**
   * Add a person to the tree
   * @param {string} name - the name of the person
   * @retuns {Boolean} success
   */
  addPerson(name) {
    return this.root = new Person(name);
  }
}

module.exports = Tree;

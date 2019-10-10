/**
 * Class representing a person on the tree
 */
class Person {
  /**
   * @class
   * @param {string} name - name of person
   * @property {Array} parents - array of pointers
   * @property {Array} children - array of pointers
   * @property {Array} spouses - array of pointers
   */
  constructor(name) {
    this.name = name;
    this.parents = null;
    this.children = null;
    this.spouses = null;
  }
}

module.exports = Person;

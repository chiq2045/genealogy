/**
 * Class representing a person on the tree
 */
class Person {
  /**
   * @class
   * @param {string} name - name of person
   * @property {Person[]} parents - array of pointers
   * @property {Person[]} children - array of pointers
   * @property {Person[]} couples - array of pointers
   */
  constructor(name) {
    this.name = name;
    this.parents = [];
    this.children = [];
    this.couples = [];
  }

  /**
   * Adds a parent
   * @params {Person} parent - parent of person
   * @returns {Boolean} success
   */
  addParent(parent) {
    const success = this.parents.unshift(parent);
    return success && parent.children.unshift(this);
  }
}

module.exports = Person;

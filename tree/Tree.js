/* eslint-disable class-methods-use-this */
const Person = require('./Person');

/**
 * Class representing a tree
 */
class Tree {
  /**
   * @class
   * @property {Person} root - the root of a tree
   * @property {Object} unrelated - a list of people not yet in tree
   */
  constructor() {
    this.root = null;
    this.unrelated = {};
  }

  /**
   * Add a person to the tree
   * @param {Object} name - the name of the person
   * @param {String} name.firstName - the first name
   * @param {String} name.surname - the last name
   * @retuns {Boolean} success
   */
  addPerson(name) {
    if (!this.root) {
      return this.root = new Person(name);
    }
    return this.unrelated[name.firstName] = new Person(name);
  }

  /**
   * Relate personA with personB with given relationship
   * @param {Person} personA - the subject of the relationship
   * @param {Person} personB - the object of the relationship
   * @param {String} relationship - the type of relationship (parent/child/partner)
   * @return {Boolean} success
   */
  connectRelations(personA, personB, relationship) {
    switch (relationship) {
      case 'parent':
        return personA.addParent(personB);
      case 'child':
        return personA.addChild(personB);
      case 'partner':
        return personA.addPartner(personB);
      default:
        return false;
    }
  }
}

module.exports = Tree;

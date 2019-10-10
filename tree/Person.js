/**
 * Class representing a person on the tree
 */
class Person {
  /**
   * @class
   * @param {string} name - name of person
   * @property {Person[]} parents - array of pointers
   * @property {Person[]} children - array of pointers
   * @property {Person[]} partners - array of pointers
   */
  constructor(name) {
    this.name = name;
    this.parents = [];
    this.children = [];
    this.partners = [];
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

  /**
   * Adds a child
   * @params {Person} child - child of a person
   * @returns {Boolean} success
   */
  addChild(child) {
    const success = this.children.unshift(child);
    return success && child.parents.unshift(this);
  }

  /**
   * Adds a partner
   * @params {Person} partner - partner of a person
   * @returns {Boolean} success
   */
  addPartner(partner) {
    const success = this.partners.unshift(partner);
    return success && partner.partners.unshift(this);
  }
}

module.exports = Person;

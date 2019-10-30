/**
 * Class representing a person on the tree
 */
class Person {
  /**
   * @class
   * @param {Object} name - name of person
   * @param {String} name.firstName - the first name
   * @param {String} name.surname - the last name
   * @property {Person[]} parents - array of pointers
   * @property {Person[]} children - array of pointers
   * @property {Person[]} partners - array of pointers
   */
  constructor(name) {
    this.firstName = name.firstName;
    this.surname = name.surname;
    this.parents = {};
    this.children = {};
    this.partners = {};
  }

  /**
   * Adds a parent
   * @params {Person} parent - parent of person
   * @returns {Boolean} - success
   */
  addParent(parent) {
    const exists = this.parents[parent.firstName];
    const parentPointer = parent;
    if (!exists) {
      this.parents[parent.firstName] = parent;
      parentPointer.children[this.firstName] = this;

      return true;
    }

    return false;
  }

  /**
   * Adds a child
   * @params {Person} child - child of a person
   * @returns {Boolean} success
   */
  addChild(child) {
    const exists = this.children[child.firstName];
    const childPointer = child;
    if (!exists) {
      this.children[child.firstName] = child;
      childPointer.parents[this.firstName] = this;

      return true;
    }

    return false;
  }

  /**
   * Adds a partner
   * @params {Person} partner - partner of a person
   * @returns {Boolean} success
   */
  addPartner(partner) {
    const exists = this.partners[partner.firstName];
    const partnerPointer = partner;
    if (!exists) {
      this.partners[partner.firstName] = partner;
      partnerPointer.partners[this.firstName] = this;

      return true;
    }

    return false;
  }
}

module.exports = Person;

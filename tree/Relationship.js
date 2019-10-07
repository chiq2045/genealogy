/**
 * Class that defines relationship between 'Person's
 */
class Relationship {
  /**
   * @class
   * @param {string} familyName - the family name
   * @property {string} type - the type of relationship
   * @property {Object} children - a list of children
   */
  constructor(familyName) {
    this.familyName = familyName;
    this.type = null;
    this.children = null;
  }
}

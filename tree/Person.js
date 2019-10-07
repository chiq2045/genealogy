/**
 * Class representing a person on the tree
 */
class Person {
  /**
   * @class
   * @param {string} name - name of person
   * @param {Date} dob - the birthdate of person in the format dd/mm/yyyy
   * @property {number} age - the age of person
   * @property {Array} stories
   */
  constructor(name, dob) {
    this.name = name;
    this.dob = null;
    this.dobParse(dob);
    this.age = this.getAge();
    this.stories = null;
    this.relationship = null;
  }

  /**
   * Changes dob into object
   * @param {string} date - a date in the format dd/mm/yyyy
   */
  dobParse(date) {
    const stringArray = date.split('/');
    this.dob = {
      day: stringArray[0],
      month: stringArray[1],
      year: stringArray[2]
    };
  }

  /**
   * Finds the difference in years between a date and today
   * @returns {number}
   */
  getAge() {
    const { dob } = this;
    if (!dob) return false;
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dob.year;
    if ((currentDate.getMonth() - dob.month) <= 0) {
      if ((currentDate.getDay() - dob.day) < 0) {
        age -= 1;
      }
    }
    return age;
  }
}

module.exports = Person;

/* exported student */
function getFullName() {
  return this.firstName + ' ' + this.lastName;
}

function getIntroduction() {
  return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
}

var student = {
  firstName: 'Johnny',
  lastName: 'Baltazar',
  subject: 'JavaScript',
  getFullName: getFullName,
  getIntroduction: getIntroduction
};

function person(name) {
  this.name = name
}

function Student(name, className) {
  this.className = className
  person.call(this, name)
}

var bosn = new Student('bosn', 'Grade2')
console.log('bosn', bosn);

person.prototype.init = function() {
  console.log('person init');
}
Student.prototype.init = function() {
  console.log('Student init');
  person.prototype.init.apply(this, arguments)
  return this
}
var soh = new Student('soh', 'grade3')
console.log('soh', soh.init());

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const person = new Person('Emrah');
console.log(person.getName());

class ExamplePerson extends Person {
  constructor(name, lastname) {
    super(name);
    this.lastname = lastname;
  }

  getLastName() {
    return this.lastname;
  }

  getFullName() {
    return `${this.getName()} ${this.getLastName()}`;
  }
}

const examplePerson = new ExamplePerson('Emrah', 'Yumuk');
console.log(examplePerson.getFullName());

/* 
Filename: sophisticated_code.js
Content: Complex JavaScript code that demonstrates various advanced programming concepts and techniques.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getFullName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getBrand() {
    return this.brand;
  }

  getModel() {
    return this.model;
  }

  getYear() {
    return this.year;
  }

  startEngine() {
    console.log(`${this.brand} ${this.model} engine started.`);
  }

  drive() {
    console.log(`${this.brand} ${this.model} is being driven.`);
  }

  stopEngine() {
    console.log(`${this.brand} ${this.model} engine stopped.`);
  }
}

// Create some instances of Person and Car
const john = new Person("John Smith", 28);
const jane = new Person("Jane Doe", 32);

const bmw = new Car("BMW", "X5", 2021);
const audi = new Car("Audi", "A4", 2020);

// Demonstrate class methods and properties
john.greet(); // Output: Hello, my name is John Smith and I'm 28 years old.
console.log(`John's age is ${john.getAge()}.`); // Output: John's age is 28.

bmw.startEngine(); // Output: BMW X5 engine started.
audi.drive(); // Output: Audi A4 is being driven.
bmw.stopEngine(); // Output: BMW X5 engine stopped.
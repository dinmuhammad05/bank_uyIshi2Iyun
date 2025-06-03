// 1-misol
// function Car(brand, model,year){
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
// }
// Car.prototype.getInfo = function (){
//         return `brand: ${this.brand}, model:${this.model}, year: ${this.year}\n`
//     }
//
// const con = new Car('Toyota', 'Camry', '2020');
// console.log(con.getInfo());

//2-misol
// const animal = {
//     makeSound(){
//         console.log("Some sound");
//     }
// }
// const dog = {}
// dog.__proto__ = animal;
// dog.__proto__.bark = function(){
//     console.log("Woof!")
// }
// dog.bark();
// dog.makeSound();

// 3-misol
// const numbers = [1, 2, 3, 4, 5];
// Array.prototype.sum = function(){
//     console.log(this.reduce((a, b) => a + b));
// }
// numbers.sum() //15

// 4-misol
// 1. Person klassi
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//
//     greet() {
//         console.log("Hello, my name is " + this.name);
//     }
// }
//
// class Employee extends Person {
//     constructor(name) {
//         super(name);
//     }
// }
//
// const emp = new Employee("Dinmuhammad");
// emp.greet();
// const per = new Person("Aziz" );
// per.greet();

// 5-misol
// const Car = {
//     brand: "Generic Car",
//     speed: 100,
//     drive: function() {
//         console.log(this.brand + " is driving at " + this.speed + " km/h");
//     }
// };
//
// const sportsCar = Object.create(Car);
//
// sportsCar.brand = "Ferrari";
// sportsCar.speed = 200;
//
// sportsCar.drive();

// + bonus
// 1
// class Book{
//     constructor(title, author, year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
//     getSummary(){
//         console.log(`Title:${this.title} , Author: ${this.author}, Year: ${this.year}`);
//     }
// }
//
// const kitob = new Book('The Alchemist', 'Paulo Coelha', 1988);
// kitob.getSummary();
// const kitob1 = new Book('Baxtiyor oila', 'Shayx Muhammad Sodiq Muhammad Yusuf', 2012);
// kitob1.getSummary();

//2
// class Phone{
//     constructor(brand, model, price){
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
//     call(){
//         console.log(`Calling from ${this.brand} ${this.model} for ${this.price}`);
//     }
// }
// const obj = new Phone('iphone','13', '999')
// obj.call();



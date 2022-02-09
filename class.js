"use strict";
// object-oriented programming
// class: template(틀, 형판)
// object: instance of class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. 클래스 선언(class declarations)
class Person {
  // constructor는 object를 만들 때 필요한 데이터를 전달함.
  constructor(name, age) {
    // fields가 constructor로부터 데이터를 할당받음.
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  } // this는 생성된 object를 가리킴.
}

const ellie = new Person("ellie", 20); // 이게 바로 object. 새로운 사람을 만드는 것임.
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class User {
  // 이 User 클래스는 firstName, lastName, _age라는 3개의 thread가 있음.
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age() {
    // getter
    return this._age;
  }
  set age(value) {
    // setter. set은 값을 설정하기 때문에 value를 받아와야 됨.
    // if (value < 0) {
    //  throw Error("age can not be negative");
    // } // 공격적인 방식
    this._age = value < 0 ? 0 : value;
  } // 콜스택이 초과되는 것을 막기 위해서 getter와 setter안에 쓰이는 변수들을 '_'기호를 사용해서 만듦.
}

const user1 = new User("steve", "jobs", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
  publicField = 2;
  #privateField = 0; //해쉬(#)기호를 사용하면 private field로 바뀜.
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and method
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// Inheritance(상속)
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // 상속하는 방법. extends 키워드를 사용한다.
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 메서드도 호출시킴. shape 클래스의 draw 함수 호출
    console.log("hot");
  }

  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
} // 오버라이딩 하는 방법. 필요한 함수들만 오버라이딩해서 작성할 수 있음.

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. class checking instance of
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // 상속된 object도 부모의 클래스임. true
console.log(triangle instanceof Object); // true. 우리가 자바스크립트에서 만든 모든 object 클래스들은 이 자바스크립트에 있는 Object를 상속한 것임.

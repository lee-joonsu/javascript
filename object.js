// Objects
// one of tje Javascript's data types.
// a collection of related data and/or functionality
// Nearly all objects in JavaScript are instance of Object
// object = {key : value}

// 1. Literals and properties
const name = "ellie"; // premitive 타입은 변수 하나당 값을 하나만 담을 수 있음.
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
} // 이런 식으로 만들면 만약 인자가 조금만 많아져도 추가해야 되는 것들이 굉장히 많아짐.
// 이렇게 되면 관리하기도 힘들고 logical하게 그룹을 묶어서 생각할 수 없음.
// 이를 개선하고자 object를 씀.

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
} // object 형식

const ellie = { name: "ellie", age: 4 };
print(ellie); // 호출할 때도 ellie만 전달하면 되니까 간편하게 데이터를 관리할 수 있음.(object 형식)

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// 계산된 properties라는 말임.
// 우리가 object안에 있는 데이터에 접근할 때는 우리가 점(.)을 이용해서 데이터를 접근함.
// 다른 방법도 있는데 object에 대괄호를 이용해서 object 안에 있는 변수의 이름을 string 형태로 접근이 가능함.(이것이 바로 computed property)
// Key should be always string
console.log(ellie.name); // dot(.)이라는 문법을 이용해서 접근이 가능함.
console.log(ellie["name"]); // computed property. 배열에서 우리가 데이터를 받아오는 것처럼 접근이 가능함.
ellie["hasJob"] = true;
console.log(ellie.hasJob);

//우리가 실시간으로 원하는 키를 받아오고 싶다면 computed property를 쓰면 됨.
function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name"); // key는 항상 string 타입으로 전달해야 됨.
printValue(ellie, "age");
// 나중에 동적으로 key에 관련된 value를 받아와야 할 때 유용하게 쓸 수 있음.

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
// 또 다른 사람을 만들고 싶다면 위의 것을 일일이 작성해야하는 번거로움이 있음.
const person4 = makePerson("ellie", 30);
console.log(person4);
function makePerson(name, age) {
  return {
    //name: name,
    //age: age,
    // 이렇게 key와 value의 이름이 동일하다면 이것을 생략할 수 있음.
    name,
    age,
  };
}
// 이렇게 함수를 이용해서 값만 전달해주면 object를 간단하게 만들 수 있음.
// 이것은 클래스와 같은 역할을 함.
// 이렇게 다른 계산을 하지 않고 순수하게 object를 생성하는 함수들은 보통 우리가 대문자로 시작하도록 함수들을 만듦.
const person5 = new Person("junsu", 24);
console.log(person5);

// 4. constructor function
function Person(name, age) {
  // this = {}; // 우리가 새로운 object를 만듦.
  this.name = name; // this에다가 name, age라는 새로운 프로퍼티를 넣고
  this.age = age;
  // return this; // 결국 이 this를 return하는 함수임.
}
// 다른 계산을 하지 않고 순수하게 object를 생성하는 함수들은 return을 만들지 않고 this.name 이런 식으로 우리가 클래스에서 constructor에서 했던 것처럼 작성하면 됨.
// 호출할 때도 'new Person()' 클래스에서 object를 만드는 것처럼 이런 식으로 할 수 있음.

// 5. in operator: property existence check(key in obj)
// 해당하는 object 안에 key가 있는지 없는지 확인하는 것임.
console.log("name" in ellie); // true
console.log("age" in ellie); // true
console.log("random" in ellie); // false
console.log(ellie.random); // undefined
// 이렇게 in 이라는 키워드를 이용해서 해당하는 키가 object 안에 있는지 확인할 수 있음.

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 이전까지의 콘솔을 모두 지움.
for (key in ellie) {
  console.log(key);
} // 이것은 ellie가 가지고 있는 key들이 블럭을 돌 때마다 key라는 지역변수에 할당이 됨.
// 모든 key들을 받아와서 일을 처리하고 싶을 떄 for..in을 쓰면 좋음.

// for (value of iterable)
// for..of는 object를 쓰는 것이 아니라 배열과 같은 배열 리스트, 이렇게 순차적으로 iterable한 것들을 씀.

const array = [1, 2, 4, 5];
//for (let i = 0; i < array.length; i++) {
//console.log(array[i]);
//} // 이렇게 하면 굉장히 많이 작성해야되서 좋지 않음.
for (value of array) {
  console.log(value);
} // 이렇게 하면 array에 있는 모든 값들이 value에 할당되면서 블럭 안에서 순차적으로 출력하거나 값을 여기 계산할 수 있음.

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user; // user2의 변수는 user라는 변수가 할당되어짐.
// user 안에 들어있는 이 reference 값이 user2에도 동일하게 할당된다는 말임.
// 그래서 user2에도 동일한 reference가 들어 있음. 그리고 이 동일한 reference도 똑같은 ellie object를 가리키고 있음.
console.log(user); // {name: coder, age: "20"}

// object를 복사할 수 있는 방법
// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
// Object는 자바스크립트에 기본적으로 탑재되어 있는 object 중에 하나임.
// 그리고 자바스크립트에 있는 모든 object는 Object를 상속함.
Object.assign(user4, user);
console.log(user4);
// assign 함수는 하나 이상의 원본 객체들로부터 모든 열거 가능한 속성들을 대상 객체로 복사함.
// 이렇게 새로운 함수나 api를 쓸 때는 어떤 파라미터를 전달해서 어떤 값이 return되는지를 꼭 확인하고 쓰는 것을 추천함.
// Object.assign(target, ...sources)
// target - 목표객체. 출처 객체의 속성을 복사해 반영한 후 반환할 객체임.
// sources - 출처객체. 목표 객체에 반영하고자 하는 속성들을 갖고 있는 객체들임.
const user5 = Object.assign({}, user);
console.log(user5);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// 앞에 동일한 property가 있다면 뒤에 나오는 출처 object일수록 값을 덮어씌움.
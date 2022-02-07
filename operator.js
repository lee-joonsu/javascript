// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainde(나머지)
console.log(2 ** 3); // exponentiation(제곱)

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1; counter 변수에 1을 더하는 것이 먼저
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter; counter 변수의 값을 postIncrement 변수에 할당하는 것이 먼저
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x= x + y;
x -= y;
x *= y;
x /= y;

// 5. comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value /  true가 한번 나오면 뒤에 true든 false든 상관없이 끝내버림.
console.log(`or: ${value1 || value2 || check()}`);

// && (and), find the first falsy value /  false가 한번 나오면 뒤에 true든 false든 상관없이 끝내버림.
console.log(`or: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("aa");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion 데이터 타입은 상관없이 느슨하게
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 데이터 타입에 따라 엄격하게
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // ellie1과 ellie2에는 레퍼런스가 각각 다름. false
console.log(ellie1 === ellie2);
console.log(ellie2 === ellie3);

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false, 0은 boolean 타입이 아니기 때문
console.log("" == false); // true
console.log("" === false); // false, ''도 boolean 타입이 아니기 때문
console.log(null == undefined); // true, null과 undefined는 특이하게도 같은 것으로 간주됨.
console.log(null === undefined); // false, null과 undefined는 다른 타입임.

// 8. conditional operators: if
// if, else of, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name === "coder") {
  console.log("you are amzing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === "ellie" ? "yes" : "no");

// 10. switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed. 조건이 맞을 때만 블럭을 실행하고 싶다면
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first면
// then check the condition. 블럭을 먼저 실행하고 싶다면
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
} // 블럭 안에 let이라는 지역변수를 선언하는 방법

// nested loops(for문 안에 for문을 넣는 것)
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
} // 이렇게 하는 것은 컴퓨터 cpu에 좋지 않기 때문에 되도록이면 피하는 게 좋음.


// quiz
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

for (let j = 0; j < 11; j++) {
  if (j > 8) {
    break;
  }
  console.log(`q2. ${j}`);
}

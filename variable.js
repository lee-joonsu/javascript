// 1. Use strict
// add in ES5
"use strict";

// 2. Variable, rw(read/write)
// variable은 메모리의 값을 읽고 쓰는 것이 가능하다. 수정가능
// let (added in ES6)
let globalName = "global name"; //global scope 변수(전역변수)
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
} // 괄호(블럭)를 이용해서 코드를 블럭 안에 작성하는 것을 block scope라고 함.

console.log(name);

// var (절대 쓰지마세요!!)
// var hoisting
// hoisting이란 어디에 선언했나에 상관없이 항상 제일 위로 선언을 끌어올려 주는 것을 말함.
// var는 block scope이 없음. 우리가 아무리 깊은 곳에 블럭을 이용해서 변수를 선언해도 어디에서나 아무곳에서나 보일 수 있는게 바로 var임.

// 3. constant, r(read only)
// 한번 할당하면 값이 절대 바뀌지 않는 변수를 말함. 메모리를 읽는 것만 가능하고 다시 다른 값으로 쓰는 것은 불가능함. 
// immutable 변수를 선호하는 이유 3가지
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// Immutable data types: primitive types, frozen objects
// Mutable data types: all objects by default are mutable in JS

// 4. Variable types
// 메모리에 값이 저장되는 방법 2가지
// primitive type -> number, string, boolean, null, undefined, symbol
// object type, box container

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life, data structure
const ellie = { name: "ellie", age: 20 };

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; // 75, string
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2"; // 4, number
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error발생

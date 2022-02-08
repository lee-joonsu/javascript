// function
// - fundamental building block in the program
// - subprogram can be used multiple times(여러번 재사용이 가능함)
// - performs a task or calculates a value

// 1. function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// 자바스크립트에서 function은 object임. 그래서 function을 변수에다 할당할 수 있고 파라미터로 전달이 되고 함수를 return할 수도 있게 됨.
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");
log(1234);
// 자바스크립트에서는 type이 없기 때문에 이 함수 자체의 인터페이스만 보았을 때 이 message가 string을 전달해야되는지 숫자도 전달해야 되는지 명확하지 않음.

// 2. parameters
// premitive parameters: passed by value
// object parameters: passed by reference(object는 메모리에 reference가 저장됨.)
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!"); // 함수를 출력할 때는 1개의 파라미터 밖에 없음. 두번째 파라미터에는 디폴트 값인 unknown이 출력됨.

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  // 파라미터에 ...을 작성하면 Rest parameter라고 함.
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
  // forEach() 각각의 배열(array)요소를 한번씩 실행시켜주는 함수. 반복문과 비슷
}
printAll("dream", "coding", "ellie");
// Rest parameter는 배열형태로 전달되게 됨.

// 5. Local scope - 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable(지역변수)
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  } // 이렇게 중첩된 함수에서 자식의 함수가 부모 함수에 정의된 변수들, 이렇게 접근 가능한 것들이 바로 closure임.
} // 이렇게 return type이 없는 함수들은 return undefined가 생략되어 있는 것과 같음.
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit

// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long update logic...
  } // 블럭 안에 로직을 많이 작성하면 가독성이 떨어짐.
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  } // 이런 식으로 조건이 맞지 않을 때는 빨리 return해서 함수를 종료하고
  // 조건이 맞을 때만 필요한 로직들을 쭉 실행하는 것이 더 좋음.
}

// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as a argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log("print");
}; // 함수를 print 변수에다가 할당하게 되면
print(); // print라는 변수에 함수를 호출하듯이 호출하면 바로 print 변수가 출력됨.
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  // randomQuiz함수 안의 printYes, PrintNo함수를 전달해서 '상황에 맞으면 이 함수들을 불러'라고 전달하는 것을 콜백 함수라고 함.
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions - 함수 안에서 함수 자신 스스로를 부르는 것
const printNo = function () {
  console.log("no!");
  print();
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function () {
//  console.log("simplePrint!");
// };

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 바로 호출할 수 있음.
(function hello() {
  console.log("IIFE");
})();
// IIFE는 자바스크립트에서 함수를 바로바로 실행하고 싶을 때 유용하게 쓸 수 있는 것임. 


// quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
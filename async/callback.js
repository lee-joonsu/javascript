"use strict";

// JavaScript is synchronous.(자바스크립트는 동기적 프로그래밍임.)
// Execute the code block in order after hoisting. 호이스팅된 이후부터 코드는 우리가 작성한 순서에 맞춰서 하나씩 동기적으로 실행된다는 의미임.
// hoisting: var나 함수 선언이 자동적으로 선언들이 제일 위로 올라가는 것을 말함.
// 그래서 호이스팅이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행이 된다는 말임.
console.log("1");
setTimeout(() => console.log("2"), 1000); // 이 브라우저 api는 무조건 브라우저한테 먼저 요청을 보내게 됨.
console.log("3"); // 브라우저의 응답을 기다리지 않고 바로 콘솔로 넘어가게 됨. 3을 출력
// 브라우저에서 1초의 시간이 지난 다음에 다시 콜백함수를 실행하여 2를 출력함.

// synchronous는 정해진 순서에 맞게 코드가 실행되는 것임.

// asynchronous는 비동기적으로 언제 코드가 실행될지 예측할 수 없는 것을 말함.
// asynchronous의 좋은 예로는 setTimeout()이라는 웹 api가 있는데 이것은 브라우저에서 제공되는 api로 우리가 지정된 시간이 지나면 우리가 전달한 함수, 콜백함수를 호출하는 것임.

// 콜백함수라는 것은 '우리가 전달해준 함수를 나중에 니가 불러줘'라는 개념임.

// Synchronous callback - 즉각적으로, 동기적으로 콜백함수를 실행함.
function printImmediately(print) {
  // 호이스팅으로 이 함수 선언이 제일 위로 올라감.(먼저 실행됨)
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback - 나중에 언제 실행될지 예측할 수 없게 콜백함수를 실행함.
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// 자바스크립트는 함수를 이렇게 콜백 형태로 인자로 다른 함수에 전달할 수도 있고 또는 변수에 할당할 수도 있는 그런 언어임.
// 언어들 마다 콤백을 지원하는 방식은 차이점이 존재함.

// 콜백함수는 이렇게 유용하게 쓰일 때도 있지만 콜백함수를 많이 사용하면 콜백지옥이 발생함.

// callback Hell example
// 우리는 먼저 사용자의 데이터를 백엔드, 서버에게서 데이터를 받아오는 클래스를 만듦.
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    // onSuccess라는 콜백함수를 사용자의 데이터와 함께 호출함.
    // ① 사용자에게 id와 password를 받아와 서버에게 로그인함.
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id); // ② 로그인이 성공적으로 된다면, 우리가 로그인한 사용자의 아이디를 다시 받아와서 이 받아온 것들을 이용해서 role(역할)을 다시 요청해서 받아옴.
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
        // ③ 역할이 성공적으로 받아와진다면 사용자의 object를 출력함.
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
} // 2개의 api. 로그인 api와 사용자마다 가지고 있는 고유한 역할들을 받는 api.

const userStorage = new UserStorage(); // 변수 선언
// 먼저 new라는 키워드를 이용해서 UserStorage()라는 언래스를 만듦. 이제 이 클래스를 이용해서 백엔드와 통신을 해볼 것임.
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
); // 여기서 문제점은 콜백을 너무 많이 호출하고 있다는 점임. 이것이 바로 콜백지옥임.
// 콜백 지옥의 문제점
// 1. 읽기가 너무 거북함. 어디서 어떤 식으로 연결되어 있는지 한눈에 가늠하기도 어렵고 business logic을 한눈에 이해하는 것도 어려움. 
// 2. 나중에 에러가 발생하거나 디버깅을 해야되는 경우에도 굉장히 어려움. 체인이 점점 길어질수록 디버깅하고 문제를 분석하는 것도 굉장히 어렵고 유지, 보수도 어려움. 

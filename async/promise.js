"use strict";

// promise is JavaScript object for asynchronous operation.
// state: pending -> fulfilled or rejected
// pending: 프로미스가 만들어져서 우리가 지정한 operation이 수행 중인 상태를 말함.
//fulfilled: 수행 중인 operation을 다 끝난 상태를 말함.
// rejected: 파일을 찾을 수가 없거나 네트워크에 문제가 생긴 상태를 말함.

// Producer vs Consumer

// 1. Producer - promise를 만듦.
// when new promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work.(network, read file) 조금 무거운 일을 promise 안에서 함.
  // 왜냐하면 시간이 꽤 걸리는 일(heavy work)을 동기적으로 처리하게 되면 heavy한 코드를 처리하는 동안 그 다음 라인의 코드가 실행되지 않기 때문임.(시간이 너무 오래걸림)
  console.log("doing something...");
  // promise를 만드는 순간 우리가 전달한 executor라는 콜백함수가 바로 실행되는 것을 확인할 수 있음. 공부할 때 이 점을 유의해야함.
  setTimeout(() => {
    resolve("ellie"); // 성공적으로 기능을 수행했을 때 resolve 콜백함수 호출.
    // reject(new Error("no network")); // Error라는 클래스는 자바스크립트에서 제공하는 object 중에 하나임.
  }, 2000);
}); // promise는 클래스이기 때문에 이렇게 new라는 키워드를 이용해서 object를 생성할 수 있음.

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    // 여기서 value라는 파라미터는 promise가 정상적으로 잘 수행되어서 마지막으로 resolve 콜백함수에서 전달된 ellie라는 값이 여기에 들어옴.
    console.log(value);
  }) // then이라는 것은 promise가 정상적으로 잘 수행이 되어서 마지막에 최종적으로 resolve라는 콜백함수를 통해서 전달한 값이 파라미터로 전달되어져서 들어옴.
  .catch((error) => {
    console.log(error);
  }) // catch라는 함수를 이용해서 에러가 발생했을 때 어떻게 처리할 것인지 콜백함수를 등록해주면 됨.
  .finally(() => {
    console.log("finally");
  }); // finally는 성공하든 실패하든 상관없이 무조건 마지막에 호출되어지는 것임.
// 그래서 성공하든 실패하든 상관없이 어떤 기능을 마지막으로 수행하고 싶을 때 finally를 사용할 수 있음.

// promise의 then을 호출하게 되면 이 then은 결국 똑같은 promise를 리턴하기 때문에 그 리턴된 promise에 catch를 다시 호출할 수 있음. 이것을 chaining이라고 함.

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    }); // 이 promise는 다른 서버랑 통신함.
  })
  .then((num) => console.log(num));
// then은 값을 바로 전달할 수도 있고 아니면 promise(또 다른 promise)를 전달해도 됨.
// 이렇게 then 여러개를 동시에 묶어서 다른 비동기적인 것들을 묶어서 처리할 수 있음.

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐓"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍿`), 1000);
  });

//getHen()
//.then((hen) => getEgg(hen))
//.then((egg) => cook(egg))
//.then((meal) => console.log(meal));

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🍞";
  }) // 전달되어진 에러를 우리가 빵으로 대체해서 즉, 계란을 받아오는 것에 문제가 생겨도 이 전체적인 promise chain에 문제가 발생하지 않도록 error handling하는 것임.
  .then(cook)
  .then(console.log) // 한가지 인자를 받아서 그대로 전달하는 경우에는 이렇게 생략이 가능함.
  .catch(console.log); // Error Handling

  // 에러를 처리하고 싶을 때는 에러가 발생한 코드 바로 다음에 catch를 작성하면서 바로 문제를 해결할 수 있음. 
  // 만약 에러처리를 하지 않는다면 계란을 받아오는 곳에서 실패를 했기 때문에 요리가 완성되지 않는 것을 확인할 수 있음. 

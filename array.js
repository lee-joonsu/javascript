"use strict";

// Array

// 1. Declaration
const arr1 = new Array(); // new라는 키워드를 이용해서 object를 만드는 것처럼 배열을 만들 수 있음.
const arr2 = [1, 2]; // 대괄호를 이용해서 데이터를 넣어 배열을 만듦. 이게 더 흔함.

// 2. Index position
// 배열을 공부할 때는 배열이 인덱스를 기준으로 데이터가 저장되기 때문에 이 인덱스를 활용해서 어떻게 데이터를 검색, 삽입, 삭제하는지를 정확히 아는 것이 중요함.
const fruits = ["🍎", "🍌"]; // 이모지도 다 문자열임.
console.log(fruits);
console.log(fruits.length);
// 첫번째 사과를 출력하려면 바로 배열에서 대괄호를 이용해서 데이터를 접근할 수 있음.
console.log(fruits[0]);
// 배열은 대괄호에 숫자(인덱스)를 전달하게 되면 그 인덱스에 해당하는 value들을 받을 수 있음.
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);
// 배열의 제일 마지막에 있는 아이템을 찾을 때 배열의 length에 -1을 해서 접근할 수 있음.
console.clear();
// 3. Looping over an array. array 반복
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach (API임)
// forEach는 콜백함수를 받아옴.
// forEach는 배열 안에 들어있는 value들마다 내가 전달한 함수를 출력함.
fruits.forEach(function (fruit, index) {
  // anonymous function은 arrow 함수를 쓸 수 있음.
  console.log(fruit, index);
});

fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end(배열의 뒤에 item을 추가하는 것)
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end(배열의 뒤에 item을 삭제시키는 것)
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging(배열의 앞에 item을 추가하는 것)
fruits.unshift("🍊", "🍋");
console.log(fruits);

// shift: remove an item to the benigging(배열의 앞에 item을 삭제시키는 것)
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position. 지정된 위치에서 데이터를 삭제할 수 있음.
fruits.push("🥭", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
// splice는 원하는 인덱스만 지정하고 몇개나 지울 것인지 말을 하지 않으면 우리가 지정한 그 인덱스부터 모든 데이터를 다 지워버림.
// splice를 한 다음 원하는 데이터를 더 추가할 수 있음.
fruits.splice(1, 1, "🍏", "🍉");
console.log(fruits);

// combine two arrays // concat()
const fruits2 = ["🍐", "🥥"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // fruits와 fruits2 배열을 합치는 것임.

// searching
// indexOf: find the index
// 우리가 배열 안에 어떤 값이 몇 번째 인덱스에 있는지 알고 싶을 때 유용하게 쓸 수 있음.
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🍉"));
console.log(fruits.indexOf("🥥")); // -1이 출력됨.
// 즉, 배열 안에 해당하는 값이 없을 때는 -1이 출력됨.

// includes
console.log(fruits.includes("🍉"));
console.log(fruits.includes("🥥"));
// includes는 배열에 특정 element가 있는지 없는지를 true또는 false로 리턴하는 함수임.

// lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits); // 사과가 2개임.
console.log(fruits.indexOf("🍎"));
// indexOf는 제일 첫 번째로 해당하는 값을 만나면 그 값이 들어있는 index를 리턴하게 됨. 
console.log(fruits.lastIndexOf("🍎"));
// lastIndexOf는 제일 마지막에 들어있는 값을 출력하게 됨. 
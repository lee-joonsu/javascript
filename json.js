// JSON
// Javascript Object Notation

// 1. Object to JSON(object를 JSON으로 변환하는 방법)
// stringify(obj)

let json = JSON.stringify(true); // boolean
console.log(json); // true(string임)

json = JSON.stringify(["apple", "banana"]); // array
console.log(json); // ["apple","banana"] // 각 요소에 json의 규격사항 중 하나인 ""가 들어가 있음.

const rabbit = {
  // object
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(), // Date라는 object로 정의
  jump: () => {
    console.log(`${name} can jump!`);
  }, // jump라는 함수는 JSON에 포함되지 않음. 이 함수는 object 위에 있는 데이터가 아니기 때문에 함수는 제외됨.
  // 또한 자바스크립트에서 자체로 들어있는 symbol같은 자바스크립트에만 있는 특별한 데이터도 JSON에 포함되지 않음.
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2022-02-19T15:34:07.856Z"}

json = JSON.stringify(rabbit, ["name"]); // name만 나오게 함. 내가 원하는 property만 골라서 정의하면 해당하는 property만 JSON으로 변환이 됨.
console.log(json); // {"name":"tori"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "ellie" : value; // name이 'ellie'로 바뀜.
}); // key와 value를 전달받는 콜백함수를 전달하게 되면 key와 value에 따라서 좀 더 다양한 것들을 해볼 수 있음.
console.log(json);

// 2. JSON to Object(JSON을 Object로 변환하는 방법)
//parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2022-02-19T16:02:48.192Z"}
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj); // Object { name: "tori", color: "white", size: null, birthDate: "2022-02-19T15:52:16.811Z" }
// 여기서 한가지 포인트는 rabbit이라는 object에는 jump라는 함수가 있음.
// 하지만 우리가 변환한 object는 string으로 만들어진 JSON으로부터 다시 object로 만들었기 때문에 함수는 없음.
rabbit.jump();
// obj.jump(); // error가 뜸.

console.log(rabbit.birthDate.getDate()); // 20(날짜)
console.log(obj.birthDate.getDate()); // error가 뜸. 그 이유는 birthDate()는 string이기 때문임. 
// 우리가 JSON으로 만든 그 데이터 자체에 있는 string이 object에 할당이 된 것임.
// revival이라는 콜백함수를 사용해서 birthDate 데이터를 object로 만들면 20으로 나옴.

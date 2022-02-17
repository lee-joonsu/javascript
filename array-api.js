// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join("-"); // separator(구분자) - 요소 간에 차이를 주기 위한 것임.
  // 배열을 string으로 변환할 수 있는 유용한 api는 join()이라는 함수임.
  console.log(result); // apple-banana-orange(구분자 '-' 있을 때)
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(","); // 구분자를 전달하지 않으면 문자열 전체가 array의 하나의 element로 들어가게 됨.
  // split(): 전달받은 separator를 이용해서 string을 여러가지 문자열로 잘게 나누어 줌. 즉 string을 배열로 만들어 줌.
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  // reverse() api는 배열 안에 있는 아이템(요소)의 순서를 거꾸로 만들어줌.
  console.log(result);
  // result 배열의 값이 이렇게 순서가 바뀌었는데 사실은 이 함수(reverse)를 호출한 array 배열 자체도 순서가 바뀌어 있음.
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.splice(0, 2); // splice는 배열 자체에서 데이터를 삭제하게 됨.
  console.log(result); // 삭제된 요소가 리턴됨. // [1, 2]
  console.log(array); // 삭제되고 남은 요소가 리턴됨. // [3, 4, 5]
} // 오답
// 여기 quiz의 포인트는 우리가 array 자체를 변형하는 것이 아니라 새로운 배열을 만들어야 함. 그래서 splice를 사용할 수 없음.
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // 포인트 하나는 end 파라미터는 exclusive하다는 것임.
  console.log(result); // [3, 4, 5]
  console.log(array); // [1, 2, 3, 4, 5]
} // 정답!!!

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  // find()는 첫번째로 true가 나오면 해당하는 그 배열의 요소를 리턴해주는 api임.
  // find()의 function은 boolean을 리턴하는 콜백함수임.
  // 이 콜백함수가 true를 리턴하게 되면 당장 이 find 메서드가 멈추게 됨. 그리고 true를 리턴한 요소가 출력됨.
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled === true);
  // filter함수는 콜백함수를 전달해서 이 콜백함수가 true인 요소들만 모아서 새로운 배열을 전달해줌. 
  console.log(result);
}
// find와 filter의 차이
// find와 filter는 콜백함수를 쓰고 boolean이 리턴된다는 공통점이 있지만, find는 처음으로 true가 나오면 즉시 함수를 중단하고 그 element를 출력함.
// 하지만 filter는 true가 처음으로 나오더라도 중단시키지 않고 true가 나온 element들로 새로운 array를 반환하는 api임. 

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{

}

// Q8. check if there is a student with the score lower than 50
{

}

// Q9. compute students' average score
{

}

// Q10. make a string containing all the scores 
// result should be: '45, 80, 90, 66, 88'
{

}

// Bonus! do Q10 sorted in ascending order 
// result should be: '45, 66, 80, 88, 90'
{
  
}
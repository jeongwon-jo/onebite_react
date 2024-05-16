// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
// key: value
let person = {
  name: "조정원",
  age: 27,
  hobby: "영화보기",
  job: "FE Developer",
  extre: {},
  10: 20,
  "like cat": true,
}

console.log(person)

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
// 존재하지 않는 프로퍼티에 접근하면 undefined를 반환함
console.log(name);

let age = person["age"]
console.log(age);

let proterty = "hobby"
let hobby = person[proterty]
console.log(hobby)

// 3.2 새로운 프로퍼티를 추가하는 방법
person.like = "선재"
person["favoriteFood"] = "햄버거"

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator"
person["favoriteFood"] = "초콜릿"

console.log(person);

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"]
console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;
console.log(result1)
console.log(result2)
console.log(result2)
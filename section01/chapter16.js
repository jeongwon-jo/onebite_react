// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black"
}

// 다른 객체를 할당하는것은 에러남
// animal = {a: 1}

// 추가, 수정 , 삭제는 가능
animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// => 값이 함수인 프로퍼티를 말함

const person = {
  name: "조정원",
  sayHi() {
    console.log('안녕')
  }
}

person.sayHi();
person["sayHi"]();
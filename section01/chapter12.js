// 1. 함수 표현식
function funcA() {
  console.log("funcA")
}

// 함수 funcA 자체를 변수에 담음
let varA = funcA;
console.log(varA)
varA();

// 함수 표현식: 값으로서 함수가 생성한것
// 호이스팅의 대상이 되지않음.
let varB = function funcB() {
  console.log("funcB")
}

varB();
// 값으로서 함수가 생성한것이기 때문에 이렇게는 호출할 수 없음
// funcB();

// 2. 화살표 함수
let varC = (value) => {
  console.log(value)
  // 10
  return value + 1;
}

console.log(varC(1))
// 11

// 스코프
// 전역스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특적 영역에서 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2;
  console.log(a)
}

funcA()
// b는 지역 스코프이기 때문에 에러남
// console.log(b)


// 중괄호 안에서 선언된 변수는 지역 스코프
if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}
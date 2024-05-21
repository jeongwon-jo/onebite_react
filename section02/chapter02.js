function returnFalse() {
  console.log("false 함수")
  return false;
}

function returnTrue() {
  console.log("true 함수")
  return true;
}

// returnFalse가 false이기 때문에 returnTrue에는 접근조차 할 필요가 없음.
// console.log(returnFalse() && returnTrue());

// 두개의 함수가 모두 실행됨
// console.log(returnTrue() && returnFalse());

// returnTrue가 true이기 때문에 returnFalse에는 접근조차 할 필요가 없음
// console.log(returnTrue() || returnFalse());

// console.log(returnFalse() && returnTrue());


// 단락평가 활용 사례
function printName(person) {
  const name = person && person.name
  console.log(name || "person의 값이 없음")
}

let person = {name: '조정원'};
printName(person)
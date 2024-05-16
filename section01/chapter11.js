// 함수선언
function gretting() {
  console.log("안녕")
}

console.log("함수 호출 전")
gretting();
console.log("함수 호출 후")

// width, height : 매개변수
function getArea(width, height) {

  // 함수안에 함수 호출 가능 (중첩 함수)
  function another() {
    console.log("another")
  }

  another();

  let area = width * height;
  
  // area : 반환값
  return area;
}

// 10, 20 : 인수
let area1 = getArea(10, 20);
console.log(area1)
let area2 = getArea(30, 20)
console.log(area2)
let area3 = getArea(120, 200)
console.log(area3)
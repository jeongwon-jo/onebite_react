// 1. 콜백함수
function main(value) {
  console.log(1)
  console.log(2)
  value()
  console.log("end")
}

// sub : 콜백함수
// 뒷전에 실행되는, 나중에 실행되는 함수
main(() => {
  console.log("i am sub")
})

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) { 
    callback(idx)
  }
}

repeat(5, (idx) => {
  console.log(idx)
});

repeat(5, (idx) => {
  console.log(idx * 2)
});

repeat(5, (idx) => {
  console.log(idx * 3)
});
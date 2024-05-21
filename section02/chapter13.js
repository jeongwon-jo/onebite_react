function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행
    // executor

    setTimeout(() => {
      if (typeof num === 'number') {
        resolve(num+10)
      } else {
        reject('숫자가 아닙니다.')
      }
    }, 2000)
  })

  return promise
}

// then 메서드
// -> 그 후에
// 비동기호출이 성공했을 때 실행
// promise chaining
/* promise.then((value) => {
  console.log(value);
})
.catch((error) => {
  console.log(error);
}) */

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result)
  })
  .then((result) => {
    console.log(result);
    return add10(result)
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })

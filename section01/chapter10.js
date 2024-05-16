// for
for (let idx = 0; idx < 10; idx++) {
  if (idx % 2 === 0) {
    // 다음명령줄은 실행되지않고 다음회차로 넘어가게됨
    continue;
  }

  console.log("반복 :", idx)

  if (idx >= 5) {
    break;
  }
}
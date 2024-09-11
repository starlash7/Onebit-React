const promise = new Promise((resolve, reject) => {
  //비동기 작업 실행하는 함수
  //executor

  setTimeout(() => {
    console.log("안녕");
    reject("왜 실패했는지 이유...");
  }, 2000);
});

setTimeout(() => {
  console.log(promise);
}, 3000);

// 함수를 선언하면 전역 스코프에 정의됨, 프로그램 종료 시 까지 전역 스코프에 선언한 함수는 메모리에서 사라지지 않음
// 아래의 함수는 const기 때문에 init 재할당 불가능.
const init = function () {
  console.log("initialized");
};
init();
init();

let a = (function () {
  return 10;
})();

let btn = document.querySelector("button");
/* 이벤트 객체는 이벤트가 발생하면 실행되는 function함수의 매개변수로 전달
 이 객체의 이름은 PointerEvent. click 이벤트의 각종 정보가 있는 객체
    Pointer객체의 주요 속성
    clientX                         마우스가 클릭된 X좌표(수평 스크롤 포함X)
    pageX                           마우스가 클릭된 X좌표(수평 스크롤 포함)
    screenX                         모니터의 왼쪽 위 모서리를 기준으로 마우스가 클릭된 좌표
 */
btn.addEventListener("click", function (event) {
  console.log(event);
  console.log(`clientX: ${event.clientX}`);
  console.log(`pageY: ${event.pageY}`);
  console.log(`screenyX : ${event.screenY}`);
});

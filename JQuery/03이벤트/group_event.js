$(function () {
  //1. mouseover, focus이벤트를 등록하고  class속성의 값 on을 <button>요소에 추가 시키면
  //   추가시킨 <button class="btn_1 on">요소를 선택하지 못하기 때문에 다른 문법으로 on()메소드를 사용 해야 합니다.

  //class="on"을 추가 시킨  <button class="btn_1 on">버튼1</button>선택
  $(".btn_1.on").on("mouseover focus", function () {
    alert("HELLO!");
  });

  $(".btn_1").addClass("on");
  //---------------------------------------------------------------------------------------------

  //2.라이브 이벤트 등록방식으로 on메소드에 의해  동적으로 추가된 class="btn_2 on" 속성을 가진
  // <button class="btn_2 on">을 최종 선택해서 가져와  이벤트를 하나이상 등록 할수 있습니다.

  $("p:eq(1)").on("mouseover focus", ".btn_2.on", function () {
    alert("WELCOME!");
  });

  $(".btn_2").addClass("on");
});

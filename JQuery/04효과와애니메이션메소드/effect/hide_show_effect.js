/*
    hide()
    노출되어 있는 요소를 다시 숨기는 효과를 주는 메소드
    기본문법
    ${"효과줄요소"}.hide("효과속도", 콜백함수);
    선택한 요소를 효과속도에 맞춰 숨긴 후 콜백함수 실행

    효과속도 ? 요소를 숨기거나 노출시킬때 바뀌는 속도
              효과속도 값의 종류는 fast, normal, slow, 또는 1/1000초 단위인 밀리초로 줌

------------------------------------------------------------------------
    show()
    숨겨져 있던 요소를 다시 노출시키는 효과
    ${"효과줄요소"}.show("효과속도", 콜백함수);
*/
$(function () {
  $("#btn1").on("click", function () {
    //h1내용 1초만에 h1요소 영역을 화면에서 숨기는 효과
    $("h1").hide(1000);
  });

  $("#btn2").on("click", function () {
    $("h1").show(1000);
  });
});

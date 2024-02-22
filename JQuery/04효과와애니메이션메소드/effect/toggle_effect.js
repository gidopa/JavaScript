/*
    toggle()
    hide인 상태에서는 show를 하고 그 반대도 함
*/
$(function () {
  $("#btn1").on("click", test);

  function test() {
    $("h1").toggle("fast");
  }
});

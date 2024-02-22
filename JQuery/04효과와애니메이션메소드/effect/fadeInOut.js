/*
    fadeOut 버튼을 선턱해서 클릭이벤트 등록하고 클릭이벤트가 발생하면
    h1요소를 1초에 점점 투명해지면서 숨겨지게 하는 효과
*/
$(function () {
  //   $("#btn1").on("click", function () {
  //     $("h1").fadeOut(1000);
  //   });
  //   $("#btn2").click(() => {
  //     $("h1").fadeIn(1000);
  //   });
  //   $("#btn3").on("click", fadeToggle);

  //   function fadeToggle() {
  //     $("h1").fadeToggle(1000);
  //   }

  // fadeOut, faadeIn, fadeToggle 버튼을 모두 가져와 click 이벤트 등록
  $(".btngroup").on("click", "button", function () {
    let id = $(this).attr("id");
    if (id === "btn1") {
      $("h1").fadeOut(1000);
    } else if (id === "btn2") {
      $("h1").fadeIn(1000);
    } else if (id === "btn3") {
      $("h1").fadeToggle(1000);
    }
  });
});

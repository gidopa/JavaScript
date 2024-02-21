//단독 이벤트 등록
// $("요소선택").click();

$(".btn1").click(function () {
  //$(".btn1").parent().next().css("color", "red");
  //$("p:eq(1)").css("color", "red");
  document.querySelectorAll("p")[1].style.color = "red";
});

$("[class='btn2']").on({
  "mouseover focus": function () {
    $("p:eq(3)").css("color", "blue");
  },
  "mouseout blur": function () {
    $("p:eq(3)").css("color", "yellow");
  },
});

$(".btn3").on("click mouseover focus", function () {
  $("body").css("background-color", "yellow");
  $("p:eq(5)").text("내용");
});

// $("등록된이벤트가 있는 요소").off("제거할이벤트 종류명")
$(".btn1").click(function () {
  $(".btn1").parent().next().css({ color: "red" });
});

$(".btn1").off("click");

$(".btn2").on("mouseover focus", function () {
  $("p:eq(3)").css("color", "blue");
});
$(".btn2").off("mouseover").off("focus");

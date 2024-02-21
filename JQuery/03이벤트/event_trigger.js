/*
    $("대상요소").단독이벤트등록(function(){이벤트처리})
    $("대상요소").trigger("등록한이벤트 메소드명")
*/
$(".btn1").click(function () {
  $(".btn1").parent().next().css({ color: "red" });
});
// trigger로 이벤트 강제 실행
$(".btn1").trigger("click");
//클릭하지 않아도 강제로 클릭되게 click()메소드 호출
// $(".btn1").click();

let btn2 = $(".btn2");
btn2.on("mouseover focus", function () {
  $("p:eq(3)").css("color", "blue");
});
btn2.trigger("focus");
